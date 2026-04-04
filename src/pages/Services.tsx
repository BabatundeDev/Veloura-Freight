import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";

function IconAir() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" aria-hidden>
      <path
        d="M8 22L32 12l-6 16-8-4-6 8-2-6 6-4-8-4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        className="text-gold-500"
      />
    </svg>
  );
}

function IconSea() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" aria-hidden>
      <path
        d="M6 26c4-4 8-4 12 0s8 4 12 0M6 20c4-4 8-4 12 0s8 4 12 0"
        stroke="currentColor"
        strokeWidth="1.8"
        className="text-gold-500"
      />
      <rect x="10" y="8" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" className="text-gold-500" />
    </svg>
  );
}

function IconLand() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" aria-hidden>
      <rect x="6" y="14" width="22" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" className="text-gold-500" />
      <circle cx="12" cy="28" r="3" stroke="currentColor" strokeWidth="1.8" className="text-gold-500" />
      <circle cx="28" cy="28" r="3" stroke="currentColor" strokeWidth="1.8" className="text-gold-500" />
      <path d="M28 14l6-6" stroke="currentColor" strokeWidth="1.8" className="text-gold-500" />
    </svg>
  );
}

const sections = [
  {
    id: "air" as const,
    title: "Air Freight",
    icon: IconAir,
    bullets: ["Fast delivery", "International routes", "Airport-to-airport logistics"],
    description:
      "Time-critical freight with prioritized handling, security screening coordination, and direct airport transfers.",
  },
  {
    id: "sea" as const,
    title: "Sea Freight",
    icon: IconSea,
    bullets: ["Container shipping (FCL / LCL)", "Bulk cargo handling", "Port-to-port delivery"],
    description:
      "Ocean programs built for cost efficiency and schedule reliability — from full containers to consolidated LCL.",
  },
  {
    id: "land" as const,
    title: "Land Freight",
    icon: IconLand,
    bullets: ["Local delivery", "Cross-border transport", "Fleet-based logistics"],
    description:
      "Road networks optimized for customs stops, cross-docks, and final-mile precision across regions.",
  },
];

export function Services() {
  return (
    <div className="bg-slate-50">
      <div className="border-b border-slate-200 bg-gradient-to-br from-navy-900 to-navy-950 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
              Services
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Structured for enterprise freight
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-400">
              Three core modes — each supported by specialists, SLAs, and transparent milestone reporting.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-24 px-4 py-20 md:px-6 lg:px-8">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-28">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-navy-900/5"
                >
                  <s.icon />
                  <h2 className="mt-6 text-2xl font-bold text-navy-900 md:text-3xl">{s.title}</h2>
                  <p className="mt-4 text-slate-600">{s.description}</p>
                </motion.div>
                <ul className="space-y-4">
                  {s.bullets.map((b, bi) => (
                    <motion.li
                      key={b}
                      initial={false}
                      whileHover={{ x: 6 }}
                      className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-gold-500/35"
                    >
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-xs font-bold text-gold-700">
                        {bi + 1}
                      </span>
                      <span className="text-lg font-medium text-navy-800">{b}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </section>
        ))}
      </div>
    </div>
  );
}
