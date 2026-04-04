import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";

function IconOilGas() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" aria-hidden>
      <path d="M20 6v6M14 12h12l2 4H12l2-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" className="text-gold-500" />
      <rect x="13" y="16" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" className="text-gold-500" />
      <path d="M17 22h6M17 26h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-gold-500" />
    </svg>
  );
}

function IconRetail() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" aria-hidden>
      <path d="M8 10h24l-3 12H11L8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" className="text-gold-500" />
      <circle cx="15" cy="28" r="2.5" stroke="currentColor" strokeWidth="1.8" className="text-gold-500" />
      <circle cx="27" cy="28" r="2.5" stroke="currentColor" strokeWidth="1.8" className="text-gold-500" />
      <path d="M6 6h3l2 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-gold-500" />
    </svg>
  );
}

function IconAgriculture() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" aria-hidden>
      <path d="M20 32V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-gold-500" />
      <path d="M20 18c0-6 8-10 8-10s0 8-8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" className="text-gold-500" />
      <path d="M20 22c0-6-8-10-8-10s0 8 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" className="text-gold-500" />
    </svg>
  );
}

function IconManufacturing() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" aria-hidden>
      <rect x="6" y="18" width="28" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" className="text-gold-500" />
      <path d="M12 18V12M20 18V10M28 18V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-gold-500" />
      <rect x="11" y="22" width="5" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" className="text-gold-500" />
      <rect x="24" y="22" width="5" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" className="text-gold-500" />
    </svg>
  );
}

const industries = [
  {
    title: "Oil & Gas",
    desc: "Project cargo, heavy lifts, and compliance-forward documentation for energy corridors.",
    icon: IconOilGas,
  },
  {
    title: "Retail",
    desc: "Seasonal volume, DC alignment, and omnichannel replenishment across regions.",
    icon: IconRetail,
  },
  {
    title: "Agriculture",
    desc: "Cold chain options, phytosanitary coordination, and harvest-window scheduling.",
    icon: IconAgriculture,
  },
  {
    title: "Manufacturing",
    desc: "Inbound materials and finished goods programs with milestone-level visibility.",
    icon: IconManufacturing,
  },
];

export function Industries() {
  return (
    <div className="bg-slate-50">
      <div className="border-b border-slate-200 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">
              Industries
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy-900 md:text-5xl">
              Built for complex supply chains
            </h1>
            <p className="mt-4 max-w-2xl text-slate-600">
              Sector teams align routing, packaging, and compliance so your cargo moves without surprises.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={0.05 * i}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="group h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-gold-500/40 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 shadow-inner">
                  <ind.icon />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-navy-900">{ind.title}</h2>
                <p className="mt-3 leading-relaxed text-slate-600">{ind.desc}</p>
                <span className="mt-6 inline-block text-sm font-semibold text-gold-600 opacity-0 transition group-hover:opacity-100">
                  Learn more →
                </span>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}