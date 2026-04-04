import { Reveal } from "./Reveal";

const regions = [
  { id: "americas", label: "Americas" },
  { id: "europe", label: "Europe" },
  { id: "africa", label: "Africa" },
  { id: "asia", label: "Asia" },
];

export function GlobalMap() {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,146,46,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
              Global network
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
              We deliver to 100+ countries worldwide
            </h2>
            <p className="mt-4 text-slate-600">
              Strategic hubs and partner lanes across every major trade corridor — synchronized for speed and compliance.
            </p>
          </div>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-navy-950 shadow-xl shadow-navy-900/20 md:rounded-2xl">
              <img
                src="/globe-network.png"
                alt="Digital globe showing global logistics connectivity"
                className="h-auto w-full max-h-[min(420px,55vh)] object-cover object-center md:max-h-[min(480px,50vh)]"
                loading="lazy"
                decoding="async"
              />
              <ul className="flex flex-wrap gap-2 border-t border-white/10 bg-navy-950/95 px-4 py-4 md:gap-3 md:px-5 md:py-4">
                {regions.map((r) => (
                  <li
                    key={r.id}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-sm"
                  >
                    {r.label}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="space-y-6">
              {[
                "Bonded warehousing at key ports and airports",
                "Dedicated account teams for high-volume shippers",
                "Real-time milestones via tracking portal",
              ].map((text) => (
                <li
                  key={text}
                  className="flex gap-4 rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:border-gold-500/40 hover:shadow-md"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
                    ✓
                  </span>
                  <span className="text-slate-700">{text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
