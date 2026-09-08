"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, Calendar, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: true,
    children: services.slice(0, 8).map((s) => ({ label: s.name, href: `/services/${s.slug}`, description: s.shortDescription })),
    viewAll: { label: "View All Services", href: "/services" },
  },
  { label: "Doctors", href: "/doctors" },
  { label: "Before & After", href: "/before-after" },
  { label: "Gallery", href: "/gallery" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={siteConfig.name + " home"}>
      <Image
        src="/Dental%20Logo.png"
        alt={`${siteConfig.name} logo`}
        width={44}
        height={44}
        className="size-11 rounded-xl object-contain"
      />
      <span className="hidden sm:block">
        <span className="block text-base font-bold leading-tight text-foreground">BrightSmile</span>
        <span className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Dental Clinic</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const reduceMotion = useReducedMotion();

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary text-primary-foreground">
        <div className="container-dental flex h-9 items-center justify-between text-xs">
          <p className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-emerald-300" />
            <span className="font-medium">Now accepting new patients</span>
          </p>
          <p className="hidden flex-1 text-right md:block">
            <span className="font-medium">Mon - Sat</span> {siteConfig.openingHours.monday}
          </p>
        </div>
      </div>

      <div
        className={cn(
          "border-b border-border/60 bg-background/90 backdrop-blur-md transition-shadow",
          scrolled && "shadow-sm"
        )}
      >
        <nav className="container-dental flex h-16 items-center justify-between gap-4" aria-label="Main navigation">
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label} className="relative">
                  <button
                    type="button"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    onClick={() => setServicesOpen((v) => !v)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    className={cn(
                      "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                      pathname.startsWith("/services") ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    Services
                    <ChevronDown className={cn("size-4 transition-transform", servicesOpen && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        className="absolute left-0 top-full pt-2"
                        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduceMotion ? undefined : { opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        <div className="grid w-[560px] grid-cols-2 gap-1 rounded-2xl border bg-popover p-2 shadow-lg">
                          {link.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="rounded-xl px-3 py-2.5 transition-colors hover:bg-muted"
                            >
                              <span className="block text-sm font-semibold text-foreground">{child.label}</span>
                              <span className="mt-0.5 block text-xs text-muted-foreground line-clamp-1">{child.description}</span>
                            </Link>
                          ))}
                          {link.viewAll && (
                            <Link
                              href={link.viewAll.href}
                              className="col-span-2 mt-1 rounded-xl border-t px-3 py-2.5 text-sm font-semibold text-primary hover:bg-muted"
                            >
                              {link.viewAll.label} →
                            </Link>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                      pathname === link.href ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <Button variant="outline" asChild size="lg" className="h-10">
              <Link href="/appointments">
                <Calendar className="size-4" />
                Book Appointment
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-lg hover:bg-muted lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto border-l bg-background p-6 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  className="flex size-10 items-center justify-center rounded-lg hover:bg-muted"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="size-5" />
                </button>
              </div>

              <MobileNav />

              <div className="mt-8 space-y-3 border-t pt-6">
                <Button asChild size="lg" className="w-full">
                  <Link href="/appointments">
                    <Calendar className="size-4" />
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileNav() {
  const pathname = usePathname();
  return (
    <nav className="mt-8" aria-label="Mobile navigation">
      <ul className="space-y-1">
        {navLinks.map((link) =>
          link.dropdown ? (
            <li key={link.label}>
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Services</p>
              <ul className="mt-1 space-y-0.5">
                {link.children?.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className={cn(
                        "flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                        pathname === child.href && "bg-muted text-primary"
                      )}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="block px-3 py-2.5 text-sm font-semibold text-primary">
                    View All Services →
                  </Link>
                </li>
              </ul>
            </li>
          ) : (
            <li key={link.label}>
              <Link
                href={link.href}
                className={cn(
                  "block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                  pathname === link.href && "bg-muted text-primary"
                )}
              >
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
