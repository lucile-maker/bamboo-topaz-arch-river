import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { neighbourhoodOptions, situations } from "@/lib/site";

const STORAGE_KEY = "george.enquiry";

type Enquiry = {
  name: string;
  email: string;
  phone: string;
  neighbourhood: string;
  situation: string;
  handover: string;
  notes: string;
  submittedAt: string;
};

const empty: Omit<Enquiry, "submittedAt"> = {
  name: "",
  email: "",
  phone: "",
  neighbourhood: "",
  situation: "",
  handover: "",
  notes: "",
};

function readStored(): Enquiry | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Enquiry;
  } catch {
    return null;
  }
}

export function EnquiryForm() {
  const [fields, setFields] = useState(empty);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState<Enquiry | null>(null);

  useEffect(() => {
    setSaved(readStored());
  }, []);

  function update(key: keyof typeof empty, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (fields.name.trim().length < 2) {
      setError("Please leave a name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      setError("A working email helps us reach you.");
      return;
    }
    if (!fields.neighbourhood) {
      setError("Please choose a neighbourhood.");
      return;
    }
    if (!fields.situation) {
      setError("Please tell us about the house.");
      return;
    }
    if (fields.handover.trim().length < 12) {
      setError("A sentence on what you would hand over first is enough.");
      return;
    }

    const enquiry: Enquiry = {
      ...fields,
      submittedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(enquiry));
    setSaved(enquiry);
    setError("");
  }

  if (saved) {
    return (
      <div className="border border-line bg-cream/50 px-6 py-10 sm:px-10">
        <p className="text-xs tracking-[0.18em] text-muted uppercase">
          Received
        </p>
        <h2 className="font-display mt-4 text-3xl tracking-tight">
          Thank you, {saved.name.split(" ")[0]}.
        </h2>
        <p className="mt-4 max-w-lg text-muted">
          We have your note for {saved.neighbourhood}. The next step is a short
          conversation — not a sales call. Founding memberships are limited and
          managed in person.
        </p>
        <p className="mt-6 text-sm text-subtle">
          We will write to {saved.email}.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8"
          onClick={() => {
            localStorage.removeItem(STORAGE_KEY);
            setSaved(null);
          }}
        >
          Send another note
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="enquiry-name" label="Name">
          <Input
            id="enquiry-name"
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
            autoComplete="name"
            required
          />
        </Field>
        <Field id="enquiry-email" label="Email">
          <Input
            id="enquiry-email"
            type="email"
            value={fields.email}
            onChange={(e) => update("email", e.target.value)}
            autoComplete="email"
            required
          />
        </Field>
      </div>
      <Field id="enquiry-phone" label="Phone, if you prefer a call">
        <Input
          id="enquiry-phone"
          type="tel"
          value={fields.phone}
          onChange={(e) => update("phone", e.target.value)}
          autoComplete="tel"
        />
      </Field>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="enquiry-neighbourhood" label="Neighbourhood">
          <NativeSelect
            id="enquiry-neighbourhood"
            value={fields.neighbourhood}
            onChange={(v) => update("neighbourhood", v)}
            options={neighbourhoodOptions}
            placeholder="Choose"
          />
        </Field>
        <Field id="enquiry-situation" label="The house">
          <NativeSelect
            id="enquiry-situation"
            value={fields.situation}
            onChange={(v) => update("situation", v)}
            options={situations}
            placeholder="Choose"
          />
        </Field>
      </div>
      <Field id="enquiry-handover" label="What would you hand over first?">
        <Textarea
          id="enquiry-handover"
          value={fields.handover}
          onChange={(e) => update("handover", e.target.value)}
          placeholder="Seasonal HVAC, finding a plumber, being home for trades…"
        />
      </Field>
      <Field id="enquiry-notes" label="Anything George should know">
        <Textarea
          id="enquiry-notes"
          value={fields.notes}
          onChange={(e) => update("notes", e.target.value)}
        />
      </Field>
      {error ? <p className="text-sm text-moss">{error}</p> : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg">
          Request a conversation
        </Button>
        <p className="text-sm text-subtle">
          No account. No commitment until we speak.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}

function NativeSelect({
  id,
  value,
  onChange,
  options,
  placeholder,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder: string;
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-12 w-full appearance-none border border-line bg-paper px-4 text-base text-ink outline-none transition-colors duration-150 focus:border-forest"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
