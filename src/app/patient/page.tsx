import Link from "next/link";
import { Calendar, Clock, MapPin, Bell, ArrowRight, History, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { patientProfile, patientAppointments, patientNotifications, treatmentHistory, formatDate } from "@/data/patient";
import { doctors } from "@/data/doctors";

export default function PatientDashboardPage() {
  const upcoming = patientAppointments.find((a) => a.status === "scheduled");
  const previous = patientAppointments.filter((a) => a.status === "completed");
  const unreadNotifications = patientNotifications.filter((n) => !n.read);
  const dentist = doctors[1];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border bg-card p-6">
        <h1 className="text-2xl font-bold text-foreground">Welcome back, {patientProfile.fullName.split(" ")[0]}!</h1>
        <p className="mt-1 text-muted-foreground">Here&apos;s an overview of your dental care at BrightSmile.</p>
      </div>

      {upcoming && (
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <Badge className="mb-2 bg-primary/10 text-primary">Upcoming Appointment</Badge>
              <h2 className="text-xl font-bold text-foreground">{upcoming.serviceName}</h2>
              <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><Calendar className="size-4 text-primary" />{formatDate(upcoming.date)}</p>
                <p className="flex items-center gap-2"><Clock className="size-4 text-primary" />{upcoming.time} with {upcoming.doctorName}</p>
                <p className="flex items-center gap-2"><MapPin className="size-4 text-primary" />{upcoming.location}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/patient/appointments">Manage</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/appointments">Reschedule</Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
              <History className="size-5 text-primary" />
              Treatment History
            </h2>
            <Link href="/patient" className="text-sm text-primary hover:underline">View All</Link>
          </div>
          <ul className="mt-4 space-y-4">
            {treatmentHistory.slice(0, 3).map((t) => (
              <li key={t.id} className="flex items-start gap-3">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <p className="font-medium text-foreground">{t.treatment}</p>
                  <p className="text-xs text-muted-foreground">{t.date} • {t.dentist}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border bg-card p-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
            <Info className="size-5 text-primary" />
            Your Dentist
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
              {dentist.name.split(" ").map((n) => n[0]).join("")}
            </span>
            <div>
              <p className="font-semibold text-foreground">{dentist.name}</p>
              <p className="text-sm text-muted-foreground">{dentist.specialization}</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{dentist.workingHours}</p>
          <Button asChild variant="outline" size="sm" className="mt-4">
            <Link href={`/doctors/${dentist.slug}`}>
              View Profile
              <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6">
        <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
          <Bell className="size-5 text-primary" />
          Notifications
        </h2>
        <ul className="mt-4 space-y-3">
          {unreadNotifications.length > 0 ? (
            unreadNotifications.map((n) => (
              <li key={n.id} className="flex items-start gap-3 rounded-xl bg-muted/40 p-3">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-red-500" />
                <div>
                  <p className="font-medium text-foreground">{n.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{n.message}</p>
                  <p className="mt-1 text-xs text-muted-foreground/70">{formatDate(n.date)}</p>
                </div>
              </li>
            ))
          ) : (
            <li className="text-sm text-muted-foreground">No new notifications.</li>
          )}
        </ul>
      </div>

      <div className="rounded-2xl border bg-card p-6">
        <h2 className="text-lg font-bold text-foreground">Previous Appointments</h2>
        <ul className="mt-4 space-y-3">
          {previous.slice(0, 3).map((a) => (
            <li key={a.id} className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-muted/40 p-3">
              <div>
                <p className="font-medium text-foreground">{a.serviceName}</p>
                <p className="text-sm text-muted-foreground">{formatDate(a.date)} • {a.time} • {a.doctorName}</p>
              </div>
              <Badge variant="secondary">Completed</Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
