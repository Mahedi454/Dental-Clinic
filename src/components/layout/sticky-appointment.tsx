"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";

export function StickyAppointmentButton() {
  return (
    <Link
      href="/appointments"
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 lg:hidden"
      aria-label="Book an appointment"
    >
      <Calendar className="size-4" />
      Book
    </Link>
  );
}
