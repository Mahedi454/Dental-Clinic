"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Save, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { patientProfile } from "@/data/patient";
import { toast } from "sonner";

const profileSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  dateOfBirth: z.string(),
  address: z.string().min(5, "Please enter your address"),
  emergencyContact: z.string().min(3),
  allergies: z.string().optional(),
  medications: z.string().optional(),
  additionalNotes: z.string().optional(),
});

type ProfileValues = z.infer<typeof profileSchema>;

export default function PatientProfilePage() {
  const [saved, setSaved] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: patientProfile.fullName,
      email: patientProfile.email,
      phone: patientProfile.phone,
      dateOfBirth: patientProfile.dateOfBirth,
      address: patientProfile.address,
      emergencyContact: patientProfile.emergencyContact,
      allergies: patientProfile.allergies,
      medications: patientProfile.medications.join(", "),
      additionalNotes: patientProfile.additionalNotes,
    },
  });

  const onSubmit = () => {
    setTimeout(() => {
      toast.success("Profile updated successfully!");
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 800);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">My Profile</h1>
        <p className="mt-1 text-muted-foreground">Manage your personal and contact information.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-2xl border bg-card p-6 sm:p-8" noValidate>
        <div className="flex items-center gap-4">
          <span className="flex size-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
            {patientProfile.fullName.split(" ").map((n) => n[0]).join("")}
          </span>
          <div>
            <p className="text-lg font-semibold text-foreground">{patientProfile.fullName}</p>
            <p className="text-sm text-muted-foreground">Patient ID: P-482139</p>
          </div>
        </div>

        <div className="border-t pt-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
            <User className="size-5 text-primary" />
            Personal Information
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" className="mt-1.5" {...register("fullName")} aria-invalid={!!errors.fullName} />
              {errors.fullName && <p className="mt-1 text-sm text-destructive">{errors.fullName.message}</p>}
            </div>
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input id="dateOfBirth" type="date" className="mt-1.5" {...register("dateOfBirth")} aria-invalid={!!errors.dateOfBirth} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" className="mt-1.5" {...register("email")} aria-invalid={!!errors.email} />
              {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" className="mt-1.5" {...register("phone")} aria-invalid={!!errors.phone} />
              {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>}
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" className="mt-1.5" {...register("address")} aria-invalid={!!errors.address} />
              {errors.address && <p className="mt-1 text-sm text-destructive">{errors.address.message}</p>}
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="emergencyContact">Emergency Contact</Label>
              <Input id="emergencyContact" className="mt-1.5" {...register("emergencyContact")} aria-invalid={!!errors.emergencyContact} />
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-lg font-bold text-foreground">Medical Information</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="allergies">Allergies</Label>
              <Input id="allergies" className="mt-1.5" placeholder="e.g. None known" {...register("allergies")} />
            </div>
            <div>
              <Label htmlFor="medications">Medications</Label>
              <Input id="medications" className="mt-1.5" placeholder="Separate with commas" {...register("medications")} />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="additionalNotes">Additional Notes</Label>
              <Textarea id="additionalNotes" rows={3} className="mt-1.5" {...register("additionalNotes")} />
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-lg font-bold text-foreground">Preferences</h2>
          <div className="mt-4 space-y-3">
            <label className="flex items-center justify-between rounded-xl bg-muted/40 p-3">
              <span className="text-sm text-foreground">Email Reminders</span>
              <input type="checkbox" defaultChecked={patientProfile.preferences.emailReminders} className="size-4 accent-primary" />
            </label>
            <label className="flex items-center justify-between rounded-xl bg-muted/40 p-3">
              <span className="text-sm text-foreground">SMS Reminders</span>
              <input type="checkbox" defaultChecked={patientProfile.preferences.smsReminders} className="size-4 accent-primary" />
            </label>
            <label className="flex items-center justify-between rounded-xl bg-muted/40 p-3">
              <span className="text-sm text-foreground">Newsletter</span>
              <input type="checkbox" defaultChecked={patientProfile.preferences.newsletter} className="size-4 accent-primary" />
            </label>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t pt-6">
          <Button type="submit" disabled={isSubmitting} size="lg">
            {saved ? (
              <>
                <CheckCircle2 className="size-4" />
                Saved!
              </>
            ) : (
              <>
                <Save className="size-4" />
                Save Changes
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
