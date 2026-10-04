import { createFileRoute, Link } from "@tanstack/react-router";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { neighbourhoods } from "@/lib/site";

export const Route = createFileRoute("/neighbourhoods")({
  component: NeighbourhoodsPage,
  head: () => ({
    meta: [
      { title: "Neighbourhoods — George" },
      {
        name: "description",
        content:
          "George begins in Leaside, the Beaches, Riverdale and Rosedale.",
      },
    ],
  }),
});

function NeighbourhoodsPage() {
  return (
    <SiteShell>
      <section className="border-b border-line pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-xs tracking-[0.18em] text-muted uppercase">
              Neighbourhoods
            </p>
            <h1 className="font-display mt-5 text-display">
              Four places we can serve well.
            </h1>
            <p className="mt-6 max-w-2xl text-lede text-muted">
              Affluent Toronto is not one market. The houses differ. The
              seasons hit differently. George starts where the founder lives
              next door, and where a manager can still know the streets.
            </p>
          </Reveal>
        </div>
      </section>

      {neighbourhoods.map((place, index) => (
        <section
          key={place.slug}
          id={place.slug}
          className={index % 2 === 1 ? "bg-cream/40" : "bg-paper"}
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 border-b border-line px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
            <Reveal
              className={
                index % 2 === 1
                  ? "lg:col-span-6 lg:order-2"
                  : "lg:col-span-6"
              }
            >
              <Photo
                src={place.image}
                alt={place.name}
                className="aspect-wide"
              />
            </Reveal>
            <Reveal
              className={
                index % 2 === 1
                  ? "lg:col-span-5 lg:order-1"
                  : "lg:col-span-5 lg:col-start-8"
              }
              delay={80}
            >
              <p className="text-xs tracking-[0.18em] text-muted uppercase">
                {place.kicker}
              </p>
              <h2 className="font-display mt-4 text-title">{place.name}</h2>
              <p className="mt-4 text-lede text-ink">{place.line}</p>
              <p className="mt-4 text-muted">{place.body}</p>
            </Reveal>
          </div>
        </section>
      ))}

      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-title">Nearby, then further</h2>
            <p className="mt-5 text-lede text-muted">
              Leslieville, where George is based, sits beside these streets.
              Parents helping children buy, and households just outside the
              first four neighbourhoods, are welcome to write. Expansion
              follows a trained manager and a process that already works.
            </p>
            <Button asChild className="mt-8">
              <Link to="/request">Request membership</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
