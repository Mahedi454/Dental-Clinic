"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, CalendarDays, User, Bell, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { patientProfile } from "@/data/patient";
import { patientNotifications } from "@/data/patient";

const nav = [
  { label: "Dashboard", href: "/patient", icon: LayoutDashboard },
  { label: "My Appointments", href: "/patient/appointments", icon: CalendarDays },
  { label: "Profile", href: "/patient/profile", icon: User },
];

export function PatientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const unread = patientNotifications.filter((n) => !n.read).length;

  return (
    <div className="bg-background py-10 sm:py-14">
      <div className="container-dental grid gap-8 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="rounded-2xl border bg-card p-5">
            <div className="flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                {patientProfile.fullName.split(" ").map((n) => n[0]).join("")}
              </span>
              <div>
                <p className="font-semibold text-foreground">{patientProfile.fullName}</p>
                <p className="text-xs text-muted-foreground">{patientProfile.email}</p>
              </div>
            </div>

            <nav className="mt-6 space-y-1" aria-label="Patient portal navigation">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <item.icon className="size-4" />
                    {item.label}
                  </Link>
                );
              })}
              <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground">
                <Bell className="size-4" />
                Notifications
                {unread > 0 && (
                  <span className="ml-auto flex size-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                    {unread}
                  </span>
                )}
              </div>
            </nav>

            <div className="mt-6 border-t pt-4">
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <LogOut className="size-4" />
                Sign Out (Demo)
              </Link>
            </div>
          </div>
        </aside>
        <div className="lg:col-span-3">{children}</div>
      </div>
    </div>
  );
}
