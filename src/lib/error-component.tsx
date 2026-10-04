import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

const FALLBACK_MESSAGE = "Something went wrong. Please try again.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-paper px-6 text-center text-ink">
      <p className="font-display text-4xl tracking-tight">George</p>
      <h1 className="text-lg font-medium">This page could not be shown.</h1>
      <p className="max-w-md text-sm break-words text-muted">
        {errorMessage(error)}
      </p>
      <Link
        to="/"
        className="inline-flex h-11 items-center bg-forest px-6 text-sm text-paper"
      >
        Return home
      </Link>
    </main>
  );
}
