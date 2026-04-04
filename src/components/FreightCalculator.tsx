import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

type Mode = "air" | "sea" | "land";

const rates: Record<Mode, { base: number; perKg: number; perKm: number }> = {
  air: { base: 120, perKg: 4.2, perKm: 0.35 },
  sea: { base: 85, perKg: 0.45, perKm: 0.08 },
  land: { base: 45, perKg: 0.9, perKm: 0.22 },
};

function estimate(weight: number, mode: Mode, distance: number): number {
  const r = rates[mode];
  const raw = r.base + weight * r.perKg + distance * r.perKm;
  return Math.round(raw * 100) / 100;
}

export function FreightCalculator() {
  const [weight, setWeight] = useState<string>("250");
  const [mode, setMode] = useState<Mode>("air");
  const [distance, setDistance] = useState<string>("4200");

  const cost = useMemo(
    () => estimate(Number(weight) || 0, mode, Number(distance) || 0),
    [weight, mode, distance]
  );

  return (
    <section className="border-y border-slate-200 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
              Estimator
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
              Freight cost calculator
            </h2>
            <p className="mt-4 text-slate-600">
              Indicative pricing for planning — final quotes are tailored to commodity, Incoterms, and lane capacity.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 md:p-8">
              <label className="block text-sm font-medium text-navy-800">
                Weight (kg)
                <input
                  type="number"
                  min={1}
                  step={1}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-navy-900 outline-none ring-gold-500/30 transition focus:border-gold-500 focus:ring-2"
                />
              </label>

              <fieldset className="mt-6">
                <legend className="text-sm font-medium text-navy-800">Shipping type</legend>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {(
                    [
                      ["air", "Air"],
                      ["sea", "Sea"],
                      ["land", "Land"],
                    ] as const
                  ).map(([key, label]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setMode(key)}
                      className={`rounded-lg border px-3 py-2.5 text-sm font-semibold transition ${
                        mode === key
                          ? "border-gold-500 bg-gold-500/15 text-navy-900"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <label className="mt-6 block text-sm font-medium text-navy-800">
                Distance (km)
                <input
                  type="number"
                  min={1}
                  step={50}
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-navy-900 outline-none ring-gold-500/30 transition focus:border-gold-500 focus:ring-2"
                />
              </label>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full min-h-[280px] flex-col justify-center rounded-2xl border border-navy-800 bg-gradient-to-br from-navy-900 to-navy-950 p-8 text-white shadow-2xl">
              <p className="text-sm font-medium uppercase tracking-wider text-gold-400">
                Estimated shipping cost
              </p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${cost}-${mode}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="mt-4"
                >
                  <span className="text-5xl font-bold tracking-tight md:text-6xl">
                    ${cost.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </span>
                  <span className="ml-2 text-lg text-slate-400">USD</span>
                </motion.div>
              </AnimatePresence>
              <p className="mt-6 text-sm leading-relaxed text-slate-400">
                Model uses lane averages for {mode} freight. Dense cargo, hazardous goods, and peak season may adjust pricing.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}