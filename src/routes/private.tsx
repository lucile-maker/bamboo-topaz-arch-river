import { createFileRoute, Link } from "@tanstack/react-router";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/private")({
  component: PrivatePage,
  head: () => ({
    meta: [
      { title: "Private Residences — George" },
      {
        name: "description",
        content:
          "George Private Residences is for families with two to five homes who need one accountable manager.",
      },
    ],
  }),
});

const privatePoints = [
  {
    title: "Records across homes",
    body: "A digital inventory and service history for each residence, held in one place, so vendors arrive prepared.",
  },
  {
    title: "Ready before you are",
    body: "Scheduled checks, vendor access, and the house prepared for arrival — heat on, water run, the small things done.",
  },
  {
    title: "Reserved capacity",
    body: "Agreed response targets and reserved supplier time, so a problem in one house does not wait behind a stranger’s job.",
  },
  {
    title: "Priced in the open",
    body: "Scope, geography and on-site hours are written down. This is not an open-ended concierge and not a staffed estate.",
  },
];

function PrivatePage() {
  return (
    <SiteShell overlayHero>
      <section className="relative min-h-[70vh] overflow-hidden bg-forest-deep text-paper">
        <Photo
          src={photos.private}
          alt="A Toronto residence at dusk"
          className="absolute inset-0 size-full"
          imgClassName="opacity-70"
          priority
        />
        <div className="hero-scrim absolute inset-0" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8">
          <p className="stagger-in text-xs tracking-[0.18em] text-paper/70 uppercase">
            George Private Residences
          </p>
          <h1 className="stagger-in font-display mt-5 max-w-4xl text-display">
            Several homes. One person accountable.
          </h1>
          <p className="stagger-in mt-6 max-w-xl text-lede text-paper/80">
            For families who own two to five homes, often travel, and do not
            keep a dedicated estate manager.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-title">
              Not staff. Not an app. A manager.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={80}>
            <p className="text-lede text-muted">
              Private Residences is a higher-touch membership: the same
              discipline as George, written for households spread across
              addresses. We test it with one or two paid clients first.
              Luxury realtors and wealth advisers may introduce; access still
              has to be earned.
            </p>
            <p className="mt-4 text-muted">
              Park Road and other concierge houses advertise home care from
              several hundred dollars a month. George has to show a broader
              outcome — records, readiness, and a person who will still be
              there next season.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-cream/40">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            {privatePoints.map((item, i) => (
              <Reveal key={item.title} delay={i * 50}>
                <p className="text-xs tracking-[0.16em] text-subtle uppercase">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-3 text-2xl tracking-tight">
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
              src={photos.living}
              alt="An interior kept ready"
              className="aspect-photo"
            />
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={80}>
            <h2 className="font-display text-title">A conversation, not a tier</h2>
            <p className="mt-5 text-lede text-muted">
              Pricing is by the household. A working sketch sits at a tenfold
              of the core membership, because the hours, travel and reserved
              supply are different. We will not publish a menu that pretends
              otherwise.
            </p>
            <Button asChild className="mt-8">
              <Link to="/request">Enquire about Private</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
