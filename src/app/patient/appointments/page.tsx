"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, MapPin, CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { patientAppointments, formatDate } from "@/data/patient";
import { toast } from "sonner";

export default function PatientAppointmentsPage() {
  const [reschedulingId, setReschedulingId] = useState<string | null>(null);
  const [cancellingId, setCancellingId] = useState<string | null>(null);
  const [deletedIds, setDeletedIds] = useState<string[]>([]);

  const appointments = patientAppointments.filter((a) => !deletedIds.includes(a.id));
  const upcoming = appointments.filter((a) => a.status === "scheduled");
  const previous = appointments.filter((a) => a.status === "completed" || a.status === "cancelled");

  const handleCancel = (id: string) => {
    setCancellingId(id);
    setTimeout(() => {
      setDeletedIds((ids) => [...ids, id]);
      setCancellingId(null);
      toast.success("Appointment cancelled successfully");
    }, 900);
  };

  const handleReschedule = (id: string) => {
    setReschedulingId(id);
    setTimeout(() => {
      setReschedulingId(null);
      toast.success("Reschedule requested! We'll confirm your new time shortly.");
    }, 900);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Appointments</h1>
          <p className="mt-1 text-muted-foreground">Manage your upcoming and past appointments.</p>
        </div>
        <Button asChild>
          <Link href="/appointments">
            <CalendarPlus className="size-4" />
            New Appointment
          </Link>
        </Button>
      </div>

      <div>
        <h2 className="text-lg font-bold text-foreground">Upcoming</h2>
        {upcoming.length > 0 ? (
          <div className="mt-4 space-y-4">
            {upcoming.map((a) => (
              <div key={a.id} className="rounded-2xl border bg-card p-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground">{a.serviceName}</h3>
                      <Badge className="bg-primary/10 text-primary">Scheduled</Badge>
                    </div>
                    <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                      <p className="flex items-center gap-2"><Calendar className="size-4 text-primary" />{formatDate(a.date)}</p>
                      <p className="flex items-center gap-2"><Clock className="size-4 text-primary" />{a.time} with {a.doctorName}</p>
                      <p className="flex items-center gap-2"><MapPin className="size-4 text-primary" />{a.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleReschedule(a.id)}
                      disabled={reschedulingId === a.id}
                    >
                      {reschedulingId === a.id ? "Requesting..." : "Reschedule"}
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleCancel(a.id)}
                      disabled={cancellingId === a.id}
                    >
                      {cancellingId === a.id ? "Cancelling..." : "Cancel"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4 rounded-2xl border border-dashed p-8 text-center">
            <p className="text-muted-foreground">You have no upcoming appointments.</p>
            <Button asChild variant="outline" className="mt-4">
              <Link href="/appointments">Book One Now</Link>
            </Button>
          </div>
        )}
      </div>

      <div>
        <h2 className="text-lg font-bold text-foreground">Previous Appointments</h2>
        {previous.length > 0 ? (
          <div className="mt-4 space-y-3">
            {previous.map((a) => (
              <div key={a.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border bg-card p-4">
                <div>
                  <p className="font-semibold text-foreground">{a.serviceName}</p>
                  <p className="text-sm text-muted-foreground">{formatDate(a.date)} • {a.time} • {a.doctorName}</p>
                </div>
                <Badge variant={a.status === "completed" ? "secondary" : "outline"}>
                  {a.status === "completed" ? "Completed" : "Cancelled"}
                </Badge>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-muted-foreground">No previous appointments.</p>
        )}
      </div>
    </div>
  );
}
