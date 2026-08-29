import { Reveal } from "./Reveal";

const regions = [
  { id: "americas", label: "Americas" },
  { id: "europe", label: "Europe" },
  { id: "africa", label: "Africa" },
  { id: "asia", label: "Asia" },
];

export function GlobalMap() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
              Global network
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              We deliver to 100+ countries worldwide
            </h2>
            <p className="mt-4 text-slate-600">
              Strategic hubs and partner lanes across every major trade corridor — synchronized for speed and compliance.
            </p>
          </div>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal delay={0.1}>
            {/* Cleaned card background to match the white/light theme setup */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm md:rounded-2xl">
              <img
                src="/globe.jpg"
                alt="Digital globe showing global logistics connectivity"
                className="h-auto w-full max-h-[min(420px,55vh)] object-cover object-center md:max-h-[min(480px,50vh)] mix-blend-multiply"
                loading="lazy"
                decoding="async"
              />
              {/* Region container changed to soft light gray instead of thick navy background */}
              <ul className="flex flex-wrap gap-2 border-t border-slate-200 bg-slate-50 px-4 py-4 md:gap-3 md:px-5 md:py-4">
                {regions.map((r) => (
                  <li
                    key={r.id}
                    className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
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
                  className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50/50 p-5 transition hover:border-gold-500/40 hover:bg-white hover:shadow-md"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-700 font-bold">
                    ✓
                  </span>
                  <span className="font-medium text-slate-700">{text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
