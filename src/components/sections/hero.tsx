"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Phone, ShieldCheck, Star, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent/40 via-background to-background">
      <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
      <div className="container-dental relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:py-24">
        <motion.div variants={reduceMotion ? undefined : container} initial="hidden" animate="show">
          <motion.div variants={reduceMotion ? undefined : item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary">
              <ShieldCheck className="size-4" />
              Trusted by 12,000+ patients
            </span>
          </motion.div>

          <motion.h1
            variants={reduceMotion ? undefined : item}
            className="mt-6 text-balance-dental text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Your Smile Deserves <span className="text-primary">Expert Care</span>
          </motion.h1>

          <motion.p
            variants={reduceMotion ? undefined : item}
            className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div variants={reduceMotion ? undefined : item} className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-12 px-6 text-base">
              <Link href="/appointments">
                <Calendar className="size-5" />
                Book Appointment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base">
              <a href={siteConfig.phoneHref}>
                <Phone className="size-5" />
                Call Now
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="h-12 px-4 text-base text-red-600 hover:bg-red-50">
              <Link href="/emergency">
                <Siren className="size-5" />
                Emergency
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={reduceMotion ? undefined : item}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <strong className="ml-1 text-foreground">4.9/5</strong>
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span>Over 25,000 successful treatments</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=1000&fit=crop"
              alt="Modern dental treatment room at BrightSmile Dental Clinic"
              width={1200}
              height={1000}
              priority
              className="aspect-[6/5] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
          </div>

          <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border bg-white/95 p-4 shadow-lg backdrop-blur sm:flex">
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="size-6" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">Advanced Sterilization</p>
              <p className="text-xs text-muted-foreground">Hospital-grade safety standards</p>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 hidden items-center gap-2 rounded-2xl border bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:flex">
            <span className="text-2xl">🦷</span>
            <div>
              <p className="text-sm font-semibold text-foreground">6 Expert Dentists</p>
              <p className="text-xs text-muted-foreground">Every field of dentistry</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
