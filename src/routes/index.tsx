import { createFileRoute, Link } from "@tanstack/react-router";
import { HomeRecord } from "@/components/home-record";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { photos } from "@/lib/photos";
import { included, neighbourhoods, steps } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteShell overlayHero>
      <Hero />
      <Problem />
      <WhatGeorgeIs />
      <HowCareWorks />
      <MembershipBand />
      <NeighbourhoodBand />
      <Founding />
      <PrivateTeaser />
    </SiteShell>
  );
}

function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-forest-deep text-paper">
      <div className="absolute inset-0">
        <img
          src={photos.hero}
          alt=""
          className="hero-media size-full object-cover"
        />
        <video
          className="hero-media absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={photos.hero}
          aria-hidden="true"
        >
          <source src={photos.heroVideo} type="video/mp4" />
        </video>
        <div className="hero-scrim absolute inset-0" />
      </div>
      <div className="relative mx-auto flex min-h-dvh max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20">
        <p
          className="stagger-in text-xs tracking-[0.22em] text-paper/70 uppercase"
          style={{ animationDelay: "80ms" }}
        >
          Toronto
        </p>
        <h1
          className="stagger-in font-display mt-5 max-w-4xl text-display"
          style={{ animationDelay: "160ms" }}
        >
          Your home,{" "}
          <em className="italic">looked after.</em>
        </h1>
        <p
          className="stagger-in mt-6 max-w-xl text-lede text-paper/80"
          style={{ animationDelay: "260ms" }}
        >
          George is a property manager for people who already pay for the work —
          and still end up managing every appointment themselves.
        </p>
        <div
          className="stagger-in mt-10 flex flex-col gap-3 sm:flex-row"
          style={{ animationDelay: "360ms" }}
        >
          <Button asChild variant="inverse" size="lg">
            <Link to="/request">Request membership</Link>
          </Button>
          <Button asChild variant="paper" size="lg">
            <Link to="/how-it-works">How George works</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-6">
          <p className="text-xs tracking-[0.18em] text-muted uppercase">
            The second job
          </p>
          <h2 className="font-display mt-5 text-title">
            A home comes with a second job.
          </h2>
          <p className="mt-6 max-w-xl text-lede text-muted">
            Finding the technician. Comparing quotes. Arranging access.
            Remembering the filter. Following up when the work is unfinished.
          </p>
          <p className="mt-4 max-w-xl text-lede text-ink">
            Busy people will happily pay for the work and still end up running
            every appointment themselves. George takes that job.
          </p>
        </Reveal>
        <Reveal className="lg:col-span-6" delay={80}>
          <Photo
            src={photos.kitchen}
            alt="A well-kept kitchen in a Toronto century home"
            className="aspect-photo lg:aspect-auto lg:h-full"
          />
        </Reveal>
      </div>
    </section>
  );
}

function WhatGeorgeIs() {
  return (
    <section className="border-b border-line bg-cream/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:items-center lg:py-28">
        <Reveal className="order-2 lg:order-1 lg:col-span-5">
          <Photo
            src={photos.keys}
            alt="House keys on a walnut console in a quiet hallway"
            className="aspect-photo"
          />
        </Reveal>
        <Reveal className="order-1 lg:order-2 lg:col-span-7" delay={80}>
          <p className="text-xs tracking-[0.18em] text-muted uppercase">
            The relationship
          </p>
          <h2 className="font-display mt-5 text-title">
            George knows the house.
          </h2>
          <p className="mt-6 max-w-xl text-lede text-muted">
            We learn the home, understand what you care about, and arrange its
            care. Coordination is the membership. Included handyman time is
            what makes it pay for itself.
          </p>
          <p className="mt-4 max-w-xl text-muted">
            Small jobs — a sticking door, a dripping tap, a smoke-alarm battery
            — get done on the next visit, without a separate booking. Larger
            work is quoted, approved, and seen through.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function HowCareWorks() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="text-xs tracking-[0.18em] text-muted uppercase">
            How care works
          </p>
          <h2 className="font-display mt-5 max-w-2xl text-title">
            A dependable person, with a record of the house behind them.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-10 lg:col-span-6">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 40}>
                <p className="font-display text-sm tracking-[0.14em] text-subtle">
                  {step.n}
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-lg text-muted">{step.body}</p>
              </Reveal>
            ))}
            <Reveal>
              <Button asChild variant="outline">
                <Link to="/how-it-works">The full process</Link>
              </Button>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-6" delay={80}>
            <HomeRecord />
            <Photo
              src={photos.hands}
              alt="A tradesperson tightening a brass hinge"
              className="mt-6 aspect-photo"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MembershipBand() {
  return (
    <section className="bg-forest text-paper">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-5">
          <p className="text-xs tracking-[0.18em] text-paper/55 uppercase">
            Membership
          </p>
          <p className="font-display mt-6 text-display">$299</p>
          <p className="mt-2 text-lg text-paper/70">a month, founding rate</p>
          <p className="mt-6 max-w-md text-paper/75">
            Membership pays for management and agreed handyman credits. Other
            trade labour and materials are additional. At launch, homeowners
            pay providers directly.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="inverse" size="lg">
              <Link to="/request">Request membership</Link>
            </Button>
            <Button asChild variant="paper" size="lg">
              <Link to="/membership">What is included</Link>
            </Button>
          </div>
        </Reveal>
        <div className="grid gap-px bg-paper/10 lg:col-span-7 sm:grid-cols-2">
          {included.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 50}
              className="bg-forest p-6 sm:p-8"
            >
              <h3 className="font-display text-xl tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/70">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function NeighbourhoodBand() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.18em] text-muted uppercase">
            Neighbourhoods
          </p>
          <h2 className="font-display mt-5 text-title">
            We begin on streets we can walk.
          </h2>
          <p className="mt-5 text-lede text-muted">
            Leaside, the Beaches, Riverdale and Rosedale — and the streets
            beside them. George is built to be delivered by a trained manager,
            then carried into the next neighbourhood.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {neighbourhoods.map((place, i) => (
            <Reveal key={place.slug} delay={i * 60}>
              <Link to="/neighbourhoods" className="group block">
                <Photo
                  src={place.image}
                  alt={place.name}
                  className="aspect-wide"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl tracking-tight">
                    {place.name}
                  </h3>
                  <span className="text-xs tracking-[0.16em] text-subtle uppercase">
                    {place.kicker}
                  </span>
                </div>
                <p className="mt-2 text-muted">{place.line}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founding() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-5">
          <Photo
            src={photos.arriving}
            alt="Arriving at a Toronto home with a folio"
            className="aspect-portrait"
          />
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={80}>
          <p className="text-xs tracking-[0.18em] text-muted uppercase">
            Founding homes
          </p>
          <h2 className="font-display mt-5 text-title">
            The first homes are managed in person.
          </h2>
          <p className="mt-6 text-lede text-muted">
            That is how we learn which tasks people actually hand over, where
            judgement matters, and what good delivery costs. Founding
            memberships are limited on purpose.
          </p>
          <p className="mt-4 text-muted">
            AI helps us read the house — inspections, appliance records, likely
            issues — and stays behind the scenes. Members buy a dependable
            person.
          </p>
          <Button asChild className="mt-8">
            <Link to="/about">Why George exists</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function PrivateTeaser() {
  return (
    <section className="relative overflow-hidden bg-forest-deep text-paper">
      <Photo
        src={photos.private}
        alt="A Toronto residence at dusk"
        className="absolute inset-0 size-full"
        imgClassName="opacity-55"
      />
      <div className="absolute inset-0 bg-forest-deep/55" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.18em] text-paper/60 uppercase">
            George Private Residences
          </p>
          <h2 className="font-display mt-5 text-title">
            Two to five homes. One accountable manager.
          </h2>
          <p className="mt-6 text-lede text-paper/80">
            For families who travel, own more than one house, and do not need a
            full estate staff — just someone who keeps the records, the
            vendors, and the house ready.
          </p>
          <Button asChild variant="inverse" className="mt-10">
            <Link to="/private">Private Residences</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
