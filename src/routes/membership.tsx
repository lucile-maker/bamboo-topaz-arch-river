import { createFileRoute, Link } from "@tanstack/react-router";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { photos } from "@/lib/photos";
import { included, notIncluded } from "@/lib/site";

export const Route = createFileRoute("/membership")({
  component: MembershipPage,
  head: () => ({
    meta: [
      { title: "Membership — George" },
      {
        name: "description",
        content:
          "George membership is $299 a month. Coordination is the membership. Included handyman time is what makes it pay for itself.",
      },
    ],
  }),
});

function MembershipPage() {
  return (
    <SiteShell>
      <section className="border-b border-line pt-28 pb-16 sm:pt-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="text-xs tracking-[0.18em] text-muted uppercase">
              Membership
            </p>
            <h1 className="font-display mt-5 text-display">
              One relationship. The house, looked after.
            </h1>
            <p className="mt-6 max-w-xl text-lede text-muted">
              George sits between a handyman subscription and a full concierge.
              You are not buying hours of software. You are retaining a manager.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={80}>
            <div className="border border-line bg-cream/50 p-8">
              <p className="text-xs tracking-[0.18em] text-muted uppercase">
                Founding rate
              </p>
              <p className="font-display mt-4 text-6xl tracking-tight">$299</p>
              <p className="mt-1 text-muted">a month · $3,588 a year</p>
              <p className="mt-6 text-sm text-muted">
                We will test this price with comparable scope. The working
                range is $2,400–$4,000 a year. Founding members lock the
                published rate for the first year.
              </p>
              <Button asChild className="mt-8 w-full sm:w-auto">
                <Link to="/request">Request membership</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <Reveal>
            <h2 className="font-display text-title">What the fee is for</h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {included.map((item, i) => (
              <Reveal key={item.title} delay={i * 40}>
                <p className="text-xs tracking-[0.16em] text-subtle uppercase">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-2 text-2xl tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-cream/40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <h2 className="font-display text-title">What it is not</h2>
            <ul className="mt-8 flex flex-col gap-5">
              {notIncluded.map((line) => (
                <li key={line} className="border-t border-line pt-5 text-muted">
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-lg text-ink">
              Autopilot requires a budget and a clear yes. New scope always
              comes back. George is an advocate inside defined boundaries —
              not an open cheque.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={80}>
            <Photo
              src={photos.living}
              alt="A lived-in living room in a Toronto century home"
              className="aspect-photo"
            />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-title">
              Why the first year is designed the way it is
            </h2>
            <p className="mt-6 text-lede text-muted">
              The first year includes inspection, onboarding, and more of
              George’s time. That is when the house is learned. Renewal is
              lighter — the record already exists — which is how the membership
              becomes more valuable to you and more sustainable to deliver.
            </p>
            <p className="mt-4 text-muted">
              Every extra hour of coordination the record removes goes back
              into care, not into another app.
            </p>
            <Button asChild className="mt-10">
              <Link to="/request">Request a conversation</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
