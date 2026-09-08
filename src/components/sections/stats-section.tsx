"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { getIcon } from "@/lib/icons";
import { stats } from "@/data/site";

export function StatsSection() {
  return (
    <section className="border-y border-border/60 bg-primary text-primary-foreground">
      <div className="container-dental grid grid-cols-2 gap-6 py-12 sm:gap-8 lg:grid-cols-4 lg:py-16">
        {stats.map((stat) => {
          const Icon = getIcon(stat.icon);
          return (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary-foreground/10">
                <Icon className="size-6" />
              </span>
              <CountUpNumber value={stat.value} suffix={stat.suffix} />
              <p className="mt-1 text-sm font-medium text-primary-foreground/80">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CountUpNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <span ref={ref} className="mt-3 text-3xl font-bold sm:text-4xl">
      {inView ? <CountUp end={value} duration={2} separator="," suffix={suffix} /> : `0${suffix}`}
    </span>
  );
}
