import Link from "next/link";
import { Home, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-7xl font-bold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Page Not Found</h1>
        <p className="mt-3 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s get your smile back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="size-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/appointments">
              <Calendar className="size-4" />
              Book Appointment
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
