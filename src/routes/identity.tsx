import { createFileRoute } from "@tanstack/react-router";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/identity")({
  component: IdentityPage,
  head: () => ({
    meta: [
      { title: "Identity — George" },
      {
        name: "description",
        content: "The George brand: name, voice, colour, type, and photography.",
      },
    ],
  }),
});

const colours = [
  { name: "Paper", hex: "#F2EEE6", className: "bg-paper text-ink border border-line" },
  { name: "Cream", hex: "#E7E0D3", className: "bg-cream text-ink" },
  { name: "Ink", hex: "#1B1916", className: "bg-ink text-paper" },
  { name: "Forest", hex: "#24332C", className: "bg-forest text-paper" },
  { name: "Moss", hex: "#3E5248", className: "bg-moss text-paper" },
];

const voiceDo = [
  "Speak as if you live on the street.",
  "Be specific: Leaside, a Viessmann, April.",
  "Treat the owner as capable and busy, never helpless.",
  "Call it membership, not a plan or a package.",
  "Let George be a person. Software stays backstage.",
];

const voiceDont = [
  "Seamless. Unlock. Revolutionize. Supercharge.",
  "AI-powered, operating system, platform play.",
  "Book now. Limited spots. Act fast.",
  "Stock-photo handshakes and smiling clipboards.",
  "Competitor comparison on the front door.",
];

function IdentityPage() {
  return (
    <SiteShell>
      <section className="border-b border-line pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-xs tracking-[0.18em] text-muted uppercase">
              Identity
            </p>
            <h1 className="font-display mt-5 text-display">George.</h1>
            <p className="mt-6 max-w-2xl text-lede text-muted">
              A quiet-luxury membership brand for Toronto homes. Not a
              marketplace. Not a handyman app. A name you can leave the keys
              with.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="font-display text-title">The name</h2>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={60}>
            <p className="text-lede text-muted">
              George is a first name, slightly old-fashioned, unflashy. It
              suggests a solicitor, a butler, a neighbour who still knows how
              the boiler works. It is the opposite of a coined startup.
            </p>
            <p className="mt-4 text-muted">
              The wordmark is the name set in Fraunces. No house icon. No
              monogram unless a printer asks for a tiny mark. On a door, on a
              folio, on a van, it should still read as a person.
            </p>
            <p className="font-display mt-10 text-6xl tracking-tight sm:text-8xl">
              George
            </p>
            <p className="mt-4 font-display text-3xl italic tracking-tight text-muted">
              Your home, looked after.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-cream/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="font-display text-title">Voice</h2>
          </Reveal>
          <div className="grid gap-10 lg:col-span-8 sm:grid-cols-2">
            <Reveal delay={40}>
              <p className="text-xs tracking-[0.18em] text-muted uppercase">
                Do
              </p>
              <ul className="mt-4 flex flex-col gap-3 text-ink">
                {voiceDo.map((line) => (
                  <li key={line} className="border-t border-line pt-3">
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-xs tracking-[0.18em] text-muted uppercase">
                Don’t
              </p>
              <ul className="mt-4 flex flex-col gap-3 text-muted">
                {voiceDont.map((line) => (
                  <li key={line} className="border-t border-line pt-3">
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <Reveal>
            <h2 className="font-display text-title">Colour</h2>
            <p className="mt-4 max-w-xl text-muted">
              Limestone paper, forest, warm ink. The palette of a Rosedale
              interior and a Leslieville evening, not a SaaS dashboard.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">
            {colours.map((c) => (
              <div key={c.name} className={`min-h-36 p-4 ${c.className}`}>
                <p className="font-display text-lg">{c.name}</p>
                <p className="mt-auto pt-10 text-xs tracking-wider">{c.hex}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="font-display text-title">Type</h2>
          </Reveal>
          <Reveal className="lg:col-span-8" delay={60}>
            <p className="font-display text-4xl tracking-tight sm:text-5xl">
              Fraunces for the voice of the house.
            </p>
            <p className="mt-6 max-w-xl text-lede text-muted">
              Source Sans 3 for letters, forms, and the work of the page.
              Optical serif for headlines; a humanist sans for everything a
              person has to read twice.
            </p>
            <p className="mt-8 text-sm tracking-[0.16em] text-subtle uppercase">
              Source Sans 3 · 16 / 24 · tracking normal
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-title">Photography</h2>
            <p className="mt-4 text-lede text-muted">
              Toronto houses, actually. Golden hour brick, winter walks, hands
              at work, no faces as the brand. Lived-in rooms. Never a clipboard
              smile.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <Photo src={photos.hero} alt="A Toronto brick house at golden hour" className="aspect-tall sm:col-span-2 sm:aspect-wide" />
            <Photo src={photos.keys} alt="House keys on a walnut console" className="aspect-tall" />
            <Photo src={photos.hands} alt="Hands at a brass hinge" className="aspect-tall" />
            <Photo src={photos.leaside} alt="A tree-lined Leaside street" className="aspect-tall sm:col-span-2 sm:aspect-wide" />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
