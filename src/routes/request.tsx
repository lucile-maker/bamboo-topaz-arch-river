import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/enquiry-form";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/request")({
  component: RequestPage,
  head: () => ({
    meta: [
      { title: "Request membership — George" },
      {
        name: "description",
        content:
          "Request a conversation about founding membership with George in Toronto.",
      },
    ],
  }),
});

function RequestPage() {
  return (
    <SiteShell>
      <section className="pt-28 pb-20 sm:pt-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-xs tracking-[0.18em] text-muted uppercase">
              Membership by request
            </p>
            <h1 className="font-display mt-5 text-display">
              A short conversation is the next step.
            </h1>
            <p className="mt-6 text-lede text-muted">
              Founding memberships are limited and managed in person. Tell us
              about the house. We will write back to arrange a time.
            </p>
            <Photo
              src={photos.kitchen}
              alt="A Toronto kitchen, looked after"
              className="mt-10 hidden aspect-photo lg:block"
            />
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={80}>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
