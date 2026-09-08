export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="relative flex size-12">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/30 opacity-75" />
          <span className="relative inline-flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            </svg>
          </span>
        </span>
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
