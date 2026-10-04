import { homeRecord } from "@/lib/site";

export function HomeRecord() {
  return (
    <aside className="border border-line bg-cream/60 p-6 sm:p-8">
      <p className="text-xs tracking-[0.18em] text-muted uppercase">
        Home record
      </p>
      <h3 className="font-display mt-3 text-2xl tracking-tight text-ink">
        {homeRecord.title}
      </h3>
      <p className="mt-1 text-sm text-muted">{homeRecord.updated}</p>
      <dl className="mt-8 divide-y divide-line">
        {homeRecord.rows.map((row) => (
          <div
            key={row.item}
            className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-12 sm:items-baseline"
          >
            <dt className="text-sm text-muted sm:col-span-4">{row.item}</dt>
            <dd className="text-sm text-ink sm:col-span-8">{row.detail}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
