"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function CTASection() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 0, transparent 40%), radial-gradient(circle at 80% 80%, white 0, transparent 40%)",
        }}
        aria-hidden="true"
      />
      <div className="container-dental py-16 sm:py-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="max-w-2xl text-balance-dental text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Transform Your Smile?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/85">
              Schedule your consultation today and take the first step toward a healthier, more confident smile.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 bg-primary-foreground px-6 text-base text-primary hover:bg-primary-foreground/90"
              >
                <Link href="/appointments">
                  <Calendar className="size-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-primary-foreground/40 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href={siteConfig.phoneHref}>
                  <Phone className="size-5" />
                  Call {siteConfig.phone}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
