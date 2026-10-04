import { createFileRoute, Link } from "@tanstack/react-router";
import { HomeRecord } from "@/components/home-record";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { photos } from "@/lib/photos";
import { steps } from "@/lib/site";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorksPage,
  head: () => ({
    meta: [
      { title: "How it works — George" },
      {
        name: "description",
        content:
          "George learns the house, watches for what it needs, takes your approval, and sees the work through.",
      },
    ],
  }),
});

function HowItWorksPage() {
  return (
    <SiteShell>
      <section className="border-b border-line pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-xs tracking-[0.18em] text-muted uppercase">
              How it works
            </p>
            <h1 className="font-display mt-5 text-display">
              From keys to a plan you can leave alone.
            </h1>
            <p className="mt-6 max-w-2xl text-lede text-muted">
              The house already knows a great deal. Inspection notes, make and
              model, the last time the boiler was serviced. George puts that in
              one place, then uses it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Photo
              src={photos.hero}
              alt="A Toronto brick house at golden hour"
              className="aspect-wide"
              priority
            />
            <Photo
              src={photos.hands}
              alt="Careful work on a brass hinge"
              className="aspect-wide"
            />
          </div>
        </div>
      </section>

      {steps.map((step, index) => (
        <section
          key={step.n}
          className={index % 2 === 1 ? "bg-cream/40" : "bg-paper"}
        >
          <div className="mx-auto grid max-w-7xl gap-10 border-b border-line px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
            <Reveal className="lg:col-span-4">
              <p className="font-display text-5xl tracking-tight text-subtle">
                {step.n}
              </p>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={60}>
              <h2 className="font-display text-title">{step.title}</h2>
              <p className="mt-5 text-lede text-muted">{step.body}</p>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-title">The house, on paper</h2>
            <p className="mt-5 text-lede text-muted">
              This is the kind of record George keeps — quiet, specific, and
              useful the next time something needs doing. It is not a dashboard
              for you to manage. It is how your manager stays current.
            </p>
            <p className="mt-4 text-muted">
              Records, inspection notes and manufacturer guidance help us see
              what the house is likely to need. Recommendations are reviewed
              by George before they reach you.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={80}>
            <HomeRecord />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Photo
              src={photos.winter}
              alt="A Toronto house looked after in winter"
              className="aspect-wide"
            />
          </Reveal>
          <Reveal className="lg:col-span-6" delay={80}>
            <h2 className="font-display text-title">Through the seasons</h2>
            <p className="mt-5 text-lede text-muted">
              Toronto houses ask for different things in April than they do in
              November. George keeps a year in view so the work is planned,
              not remembered at the first freeze.
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
