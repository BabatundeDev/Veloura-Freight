import { Link } from "react-router-dom";
import { BrandAirplaneMark } from "./BrandAirplaneMark";

export function Footer() {
  return (
    <footer className="border-t bg-white text-slate-600">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              {/* Note: If your BrandAirplaneMark icon is hardcoded to white, you may need to pass a className like "text-slate-900" */}
              <BrandAirplaneMark className="text-slate-900" />
              <span className="font-bold text-slate-900">Veloura Freight Logistics</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Enterprise freight across air, sea, and land — engineered for reliability at global scale.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gold-700">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="transition-colors hover:text-slate-900">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="transition-colors hover:text-slate-900">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-slate-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gold-700">
              Tools
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/tracking" className="transition-colors hover:text-slate-900">
                  Shipment tracking
                </Link>
              </li>
              <li>
                <Link to="/quote" className="transition-colors hover:text-slate-900">
                  Request a quote
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gold-700">
              Compliance
            </h3>
            <p className="text-sm leading-relaxed text-slate-500">
              Licensed freight forwarder. Customs brokerage available in select corridors.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-8 text-xs md:flex-row md:items-center">
          <span className="text-slate-500">© {new Date().getFullYear()} Veloura Freight Logistics. All rights reserved.</span>
          <span className="text-slate-400">Global operations · 100+ countries</span>
        </div>
      </div>
    </footer>
  );
}
