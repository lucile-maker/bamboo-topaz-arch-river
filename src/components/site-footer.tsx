import { Link } from "@tanstack/react-router";
import { APP_NAME, nav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <p className="font-display text-4xl tracking-tight">{APP_NAME}</p>
          <p className="mt-4 max-w-sm text-paper/70">
            A property manager for Toronto homeowners who want the house well
            cared for, and their time back.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
          <div>
            <p className="text-xs tracking-[0.18em] text-paper/50 uppercase">
              Visit
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-paper/80">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/request" className="hover:text-paper">
                  Request membership
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.18em] text-paper/50 uppercase">
              Serve
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-paper/80">
              <li>Leaside</li>
              <li>The Beaches</li>
              <li>Riverdale</li>
              <li>Rosedale</li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.18em] text-paper/50 uppercase">
              House
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-paper/80">
              <li>
                <Link to="/identity" className="hover:text-paper">
                  Identity
                </Link>
              </li>
              <li>Toronto</li>
              <li>Membership by request</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs tracking-wide text-paper/45 sm:flex-row sm:justify-between sm:px-8">
          <p>George is a membership, not software.</p>
          <p>Figures in CAD, excluding tax.</p>
        </div>
      </div>
    </footer>
  );
}
