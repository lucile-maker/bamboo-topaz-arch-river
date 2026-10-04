import { createFileRoute, Link } from "@tanstack/react-router";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — George" },
      {
        name: "description",
        content:
          "George is being built in Leslieville for the neighbourhoods next door. The first homes are managed in person.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <SiteShell>
      <section className="border-b border-line pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-xs tracking-[0.18em] text-muted uppercase">
              About
            </p>
            <h1 className="font-display mt-5 text-display">
              I build services people rely on.
            </h1>
            <p className="mt-6 max-w-2xl text-lede text-muted">
              George is named like a person because that is the job: someone
              who knows the house, and whom you can leave it with.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Photo
              src={photos.arriving}
              alt="Arriving at a member home"
              className="aspect-portrait"
              priority
            />
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={80}>
            <p className="text-xs tracking-[0.18em] text-muted uppercase">
              Lucile
            </p>
            <h2 className="font-display mt-4 text-title">
              Leslieville, next door to the first streets.
            </h2>
            <p className="mt-6 text-lede text-muted">
              I live in Leslieville. My first degree, at the University of
              Toronto, combined sociology and architecture: how people live in
              buildings, and how buildings work. That is still the work.
            </p>
            <p className="mt-4 text-muted">
              I have spent my career turning scattered records into something
              a person can use — in product, in financial services, and in
              investigative search. George does that for a home: inspection
              notes, appliance history, and the next thing the house is likely
              to need, held by someone accountable.
            </p>
            <p className="mt-4 text-muted">
              The first memberships are managed personally. Before George
              becomes a company with more than one manager, it has to be a
              service a trained person can deliver to the same standard.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-cream/40">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-title">What we are learning first</h2>
            <p className="mt-5 text-lede text-muted">
              The next stretch is evidence, not a louder website. Conversations
              with homeowners, trades and realtors. A handful of paid founding
              homes. Hours logged, so the membership is priced from delivery,
              not from a slide.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Homeowners",
                body: "What breaks, who they call, what they already pay, and what they would hand over first.",
              },
              {
                title: "Trades",
                body: "Whether steady, well-prepared jobs from a coordinator are worth priority scheduling.",
              },
              {
                title: "Paid pilots",
                body: "Three to five homes on a founding rate, with a defined scope, so willingness to pay is real.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 50}>
                <h3 className="font-display text-2xl tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Photo
              src={photos.leaside}
              alt="A tree-lined Toronto street"
              className="aspect-wide"
            />
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={80}>
            <h2 className="font-display text-title">If this is your street</h2>
            <p className="mt-5 text-lede text-muted">
              Write to George. A short conversation is the next step. The
              first memberships are limited on purpose.
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
