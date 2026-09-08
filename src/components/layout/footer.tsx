import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, PhoneCall } from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon, YoutubeIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/lib/site";
import { services } from "@/data/services";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Doctors", href: "/doctors" },
  { label: "Before & After", href: "/before-after" },
  { label: "Gallery", href: "/gallery" },
];

const footerServices = services.slice(0, 8).map((s) => ({ label: s.name, href: `/services/${s.slug}` }));

const socials = [
  { label: "Facebook", href: siteConfig.socials.facebook, icon: FacebookIcon },
  { label: "Instagram", href: siteConfig.socials.instagram, icon: InstagramIcon },
  { label: "Twitter", href: siteConfig.socials.twitter, icon: TwitterIcon },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: LinkedinIcon },
  { label: "YouTube", href: siteConfig.socials.youtube, icon: YoutubeIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-[oklch(0.97_0.01_215)]">
      <div className="container-dental py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5" aria-label={siteConfig.name + " home"}>
              <Image
                src="/Dental%20Logo.png"
                alt={`${siteConfig.name} logo`}
                width={44}
                height={44}
                className="size-11 rounded-xl object-contain"
              />
              <span>
                <span className="block text-base font-bold leading-tight text-foreground">BrightSmile</span>
                <span className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Dental Clinic</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-foreground">Follow Us</h3>
              <div className="mt-3 flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex size-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <s.icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <Link href="/emergency" className="mt-6 flex items-center gap-2 text-sm font-semibold text-red-600">
              <PhoneCall className="size-4" />
              Emergency: {siteConfig.emergencyPhone}
            </Link>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {footerServices.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm font-semibold text-primary">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-foreground">Contact & Hours</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={siteConfig.phoneHref} className="hover:text-primary">{siteConfig.phone}</a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">{siteConfig.email}</a>
              </li>
              <li className="flex gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="space-y-1">
                  <span className="block">Mon - Fri: {siteConfig.openingHours.monday}</span>
                  <span className="block">Saturday: {siteConfig.openingHours.saturday}</span>
                  <span className="block">Sunday: {siteConfig.openingHours.sunday}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-dental flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
