"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen items-center justify-center bg-background px-4">
          <div className="mx-auto max-w-lg text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
              <AlertTriangle className="size-8" />
            </div>
            <h1 className="mt-6 text-2xl font-bold text-foreground">Something went wrong</h1>
            <p className="mt-3 text-muted-foreground">
              An unexpected error occurred. Please try again, or contact us at (555) 123-4567 if the problem persists.
            </p>
            <button
              onClick={reset}
              className="mt-8 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
