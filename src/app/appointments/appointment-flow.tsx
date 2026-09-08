"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { toast } from "sonner";
import {
  Calendar,
  Clock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  User,
  ArrowLeft,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { services, getServiceBySlug } from "@/data/services";
import { doctors, getDoctorBySlug } from "@/data/doctors";
import { availableDays, getAvailableSlots } from "@/data/appointments";
import { createNewAppointment } from "@/data/appointments";
import { format } from "date-fns";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const patientSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name").max(80),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number").regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
  dateOfBirth: z.string().refine((v) => {
    if (!v) return true;
    const d = new Date(v);
    return !isNaN(d.getTime()) && d < new Date();
  }, "Please enter a valid date of birth"),
  additionalMessage: z.string().max(500, "Message is too long").optional(),
});

type PatientFormValues = z.infer<typeof patientSchema>;

const steps = ["Service", "Dentist", "Date", "Time", "Details", "Review"];

function AppointmentFlowInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const reduceMotion = useReducedMotion();

  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState<string | null>(() => {
    const slug = searchParams.get("service");
    return slug ? getServiceBySlug(slug)?.id ?? null : null;
  });
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(() => {
    const slug = searchParams.get("doctor");
    return slug ? getDoctorBySlug(slug)?.id ?? null : null;
  });
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState<ReturnType<typeof createNewAppointment> | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<PatientFormValues>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      additionalMessage: "",
    },
  });

  const slots = useMemo(
    () => (selectedService && selectedDoctor && selectedDate ? getAvailableSlots(selectedService, selectedDoctor, selectedDate) : []),
    [selectedService, selectedDoctor, selectedDate]
  );

  const canProceed = () => {
    switch (step) {
      case 0:
        return !!selectedService;
      case 1:
        return !!selectedDoctor;
      case 2:
        return !!selectedDate;
      case 3:
        return !!selectedTime;
      default:
        return true;
    }
  };

  const next = async () => {
    if (step === 4) {
      const valid = await trigger();
      if (!valid) {
        toast.error("Please check the highlighted fields and try again.");
        return;
      }
    }
    if (!canProceed()) {
      toast.error("Please make a selection to continue.");
      return;
    }
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = (data: PatientFormValues) => {
    setSubmitting(true);
    setTimeout(() => {
      if (selectedService && selectedDoctor && selectedDate && selectedTime) {
        const appointment = createNewAppointment({
          serviceId: selectedService,
          doctorId: selectedDoctor,
          date: selectedDate,
          time: selectedTime,
          patient: data,
        });
        setSubmitting(false);
        setConfirmed(appointment);
        toast.success("Appointment booked successfully!");
        router.replace("/appointments");
      }
    }, 1200);
  };

  const service = services.find((s) => s.id === selectedService);
  const doctor = doctors.find((d) => d.id === selectedDoctor);
  const formattedDate = selectedDate ? format(new Date(selectedDate + "T00:00:00"), "EEEE, MMMM d, yyyy") : "";

  if (confirmed) {
    return (
      <div className="container-dental flex min-h-[70vh] items-center justify-center py-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-xl rounded-2xl border bg-card p-8 text-center shadow-sm"
        >
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <CheckCircle2 className="size-9" />
          </div>
          <h1 className="mt-5 text-2xl font-bold text-foreground">Appointment Confirmed!</h1>
          <p className="mt-3 text-muted-foreground">
            Thank you! Your appointment has been scheduled. A confirmation has been sent to your email.
          </p>

          <div className="mt-8 rounded-xl border bg-muted/40 p-6 text-left">
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Confirmation #</dt>
                <dd className="font-semibold text-foreground">{confirmed.id}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Service</dt>
                <dd className="font-semibold text-foreground">{confirmed.serviceName}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Dentist</dt>
                <dd className="font-semibold text-foreground">{confirmed.doctorName}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Date & Time</dt>
                <dd className="font-semibold text-foreground">{format(new Date(confirmed.date + "T00:00:00"), "MMMM d, yyyy")}, {confirmed.time}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Location</dt>
                <dd className="font-semibold text-foreground">{confirmed.location}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link href="/patient">View My Appointments</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Need to reschedule? Call us at {siteConfig.phone}.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-background py-10 sm:py-14">
      <div className="container-dental max-w-4xl">
        <Breadcrumb items={[{ label: "Book Appointment" }]} />
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Book Your Appointment</h1>
        <p className="mt-2 text-muted-foreground">
          Complete the {steps.length} quick steps below to schedule your visit. Prefer to talk? Call us at{" "}
          <a href={siteConfig.phoneHref} className="font-medium text-primary">{siteConfig.phone}</a>.
        </p>

        <div className="mt-8 hidden items-center gap-2 sm:flex">
          {steps.map((label, i) => (
            <div key={label} className="flex flex-1 items-center gap-2">
              <button
                type="button"
                onClick={() => i < step && setStep(i)}
                disabled={i > step}
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                  i < step && "bg-primary text-primary-foreground",
                  i === step && "bg-primary text-primary-foreground ring-4 ring-primary/20",
                  i > step && "bg-muted text-muted-foreground"
                )}
                aria-label={`Step ${i + 1}: ${label}`}
              >
                {i < step ? <CheckCircle2 className="size-4" /> : i + 1}
              </button>
              <span className={cn("hidden text-sm font-medium lg:block", i === step ? "text-foreground" : "text-muted-foreground")}>
                {label}
              </span>
              {i < steps.length - 1 && <div className={cn("h-0.5 flex-1", i < step ? "bg-primary" : "bg-muted")} />}
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border bg-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-8"
            >
              {step === 0 && (
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Step 1: Select Your Service</h2>
                  <p className="mt-1 text-sm text-muted-foreground">Choose the treatment you need.</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedService(s.id)}
                        className={cn(
                          "rounded-xl border p-4 text-left transition-all",
                          selectedService === s.id
                            ? "border-primary bg-primary/5 ring-2 ring-primary/30"
                            : "hover:border-primary/40 hover:bg-muted"
                        )}
                      >
                        <p className="font-semibold text-foreground">{s.name}</p>
                        <p className="mt-1 text-xs text-muted-foreground">From ৳{s.startingPrice.toLocaleString("en-US")} • {s.duration}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Step 2: Select Your Dentist</h2>
                  <p className="mt-1 text-sm text-muted-foreground">Pick the specialist you&apos;d like to see.</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {doctors.map((d) => (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => setSelectedDoctor(d.id)}
                        className={cn(
                          "rounded-xl border p-4 text-left transition-all",
                          selectedDoctor === d.id
                            ? "border-primary bg-primary/5 ring-2 ring-primary/30"
                            : "hover:border-primary/40 hover:bg-muted"
                        )}
                      >
                        <p className="font-semibold text-foreground">{d.name}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{d.specialization} • {d.experienceYears}+ yrs</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Step 3: Select a Date</h2>
                  <p className="mt-1 text-sm text-muted-foreground">Pick a convenient day.</p>
                  <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                    {availableDays.map((date) => {
                      const d = new Date(date + "T00:00:00");
                      return (
                        <button
                          key={date}
                          type="button"
                          onClick={() => {
                            setSelectedDate(date);
                            setSelectedTime(null);
                          }}
                          className={cn(
                            "rounded-xl border p-3 text-center transition-all",
                            selectedDate === date
                              ? "border-primary bg-primary/5 ring-2 ring-primary/30"
                              : "hover:border-primary/40 hover:bg-muted"
                          )}
                        >
                          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{format(d, "EEE")}</p>
                          <p className="mt-1 text-2xl font-bold text-foreground">{format(d, "d")}</p>
                          <p className="text-xs text-muted-foreground capitalize">{format(d, "MMM")}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Step 4: Select a Time</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {formattedDate} — {doctor?.name}
                  </p>
                  {slots.length > 0 ? (
                    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                      {slots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={cn(
                            "flex items-center justify-center gap-2 rounded-xl border py-3 text-sm font-medium transition-all",
                            selectedTime === time
                              ? "border-primary bg-primary text-primary-foreground"
                              : "hover:border-primary/40 hover:bg-muted"
                          )}
                        >
                          <Clock className="size-4" />
                          {time}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-6 rounded-xl border border-dashed p-6 text-center">
                      <p className="text-muted-foreground">No available slots on this date.</p>
                      <Button variant="outline" className="mt-4" onClick={back}>Try Another Date</Button>
                    </div>
                  )}
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Step 5: Your Information</h2>
                  <p className="mt-1 text-sm text-muted-foreground">Tell us a bit about yourself.</p>
                  <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" className="mt-1.5" placeholder="e.g. Jordan Smith" {...register("fullName")} aria-invalid={!!errors.fullName} />
                      {errors.fullName && <p className="mt-1 text-sm text-destructive">{errors.fullName.message}</p>}
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" className="mt-1.5" placeholder="you@email.com" {...register("email")} aria-invalid={!!errors.email} />
                        {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" className="mt-1.5" placeholder="(555) 123-4567" {...register("phone")} aria-invalid={!!errors.phone} />
                        {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <Input id="dateOfBirth" type="date" className="mt-1.5" {...register("dateOfBirth")} aria-invalid={!!errors.dateOfBirth} />
                      {errors.dateOfBirth && <p className="mt-1 text-sm text-destructive">{errors.dateOfBirth.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="additionalMessage">Additional Message <span className="text-muted-foreground">(optional)</span></Label>
                      <Textarea id="additionalMessage" className="mt-1.5" rows={4} placeholder="Any specific concerns, questions, or information you'd like us to know?" {...register("additionalMessage")} aria-invalid={!!errors.additionalMessage} />
                      {errors.additionalMessage && <p className="mt-1 text-sm text-destructive">{errors.additionalMessage.message}</p>}
                    </div>
                  </form>
                </div>
              )}

              {step === 5 && (
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Step 6: Review Your Appointment</h2>
                  <p className="mt-1 text-sm text-muted-foreground">Please confirm the details below.</p>

                  <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    <div className="space-y-4 rounded-xl border bg-muted/40 p-5 sm:p-6">
                      <div className="flex items-start gap-3">
                        <Calendar className="mt-0.5 size-5 shrink-0 text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">{service?.name}</p>
                          <p className="text-sm text-muted-foreground">Category: {service?.category}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <User className="mt-0.5 size-5 shrink-0 text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">{doctor?.name}</p>
                          <p className="text-sm text-muted-foreground">{doctor?.specialization} • {doctor?.experienceYears}+ yrs</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="mt-0.5 size-5 shrink-0 text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">{formattedDate}</p>
                          <p className="text-sm text-muted-foreground">Time: {selectedTime}</p>
                        </div>
                      </div>
                      <div className="rounded-lg border-t pt-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Treatment Cost</p>
                        <p className="mt-1 text-2xl font-bold text-foreground">From ৳{service?.startingPrice.toLocaleString("en-US")}</p>
                        <p className="text-xs text-muted-foreground">Final cost confirmed after consultation. Insurance may cover part of this.</p>
                      </div>
                    </div>

                    <Button type="submit" disabled={submitting} size="lg" className="mt-6 w-full">
                      {submitting ? (
                        <>
                          <span className="size-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
                          Confirming...
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="size-5" />
                          Confirm Appointment
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {step < 5 && (
            <div className="flex items-center justify-between border-t p-4 sm:p-5">
              <Button variant="ghost" onClick={back} disabled={step === 0}>
                <ChevronLeft className="size-4" />
                Back
              </Button>
              <Button onClick={next} disabled={(step === 3 && !selectedTime) || (step === 2 && !selectedDate)}>
                Next
                <ChevronRight className="size-4" />
              </Button>
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
          <ArrowLeft className="size-4" />
          Need help? Call{" "}
          <a href={siteConfig.phoneHref} className="flex items-center gap-1 font-medium text-primary">
            <Phone className="size-4" />
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

export function AppointmentFlow() {
  return (
    <Suspense fallback={<div className="container-dental py-20 text-center">Loading booking...</div>}>
      <AppointmentFlowInner />
    </Suspense>
  );
}
