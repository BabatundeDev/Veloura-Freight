import { Link } from "react-router-dom";
import { BrandAirplaneMark } from "./BrandAirplaneMark";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <BrandAirplaneMark />
              <span className="font-semibold text-white">Veloura Freight Logistics</span>
            </div>
            <p className="text-sm leading-relaxed">
              Enterprise freight across air, sea, and land — engineered for reliability at global scale.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold-500">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold-500">
              Tools
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/tracking" className="hover:text-white">
                  Shipment tracking
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-white">
                  Request a quote
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold-500">
              Compliance
            </h3>
            <p className="text-sm leading-relaxed">
              Licensed freight forwarder. Customs brokerage available in select corridors.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Veloura Freight Logistics. All rights reserved.</span>
          <span className="text-slate-500">Global operations · 100+ countries</span>
        </div>
      </div>
    </footer>
  );
}
