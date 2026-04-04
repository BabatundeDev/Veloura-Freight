import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "../components/Reveal";
import {
  resolveTracking,
  type ShipmentStage,
  type TrackingResult,
} from "../data/mockTracking";

const stageIndex: Record<ShipmentStage, number> = {
  received: 0,
  customs: 1,
  transit: 2,
  delivered: 3,
};

function badgeClass(stage: ShipmentStage, active: ShipmentStage): string {
  const done = stageIndex[stage] <= stageIndex[active];
  if (!done) return "bg-slate-200 text-slate-500";
  if (stage === "delivered" && active === "delivered")
    return "bg-emerald-500/15 text-emerald-700 ring-1 ring-emerald-500/40";
  if (stage === active) return "bg-gold-500/15 text-gold-800 ring-1 ring-gold-500/40";
  return "bg-navy-900/10 text-navy-800";
}

export function Tracking() {
  const [id, setId] = useState("");
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleTrack(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);
    setLoading(true);
    window.setTimeout(() => {
      const r = resolveTracking(id);
      setLoading(false);
      if (!r) {
        setError("Enter a tracking ID (at least 3 characters). Try PF2026001.");
        return;
      }
      setResult(r);
    }, 450);
  }

  const progress = result
    ? ((stageIndex[result.currentStage] + 1) / 4) * 100
    : 0;

  return (
    <div className="min-h-[80vh] bg-slate-50">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">
              Enterprise tracking
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy-900 md:text-5xl">
              Shipment tracking
            </h1>
            <p className="mt-4 max-w-2xl text-slate-600">
              Enter your Veloura Freight tracking ID to view milestones. Demo IDs:{" "}
              <span className="font-mono text-navy-800">PF2026001</span>–
              <span className="font-mono text-navy-800">PF2026004</span>.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={handleTrack} className="mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Tracking ID"
                className="min-h-[52px] flex-1 rounded-xl border border-slate-200 bg-white px-5 text-navy-900 outline-none ring-gold-500/20 transition focus:border-gold-500 focus:ring-2"
              />
              <button
                type="submit"
                disabled={loading}
                className="min-h-[52px] rounded-xl bg-navy-900 px-8 text-sm font-semibold text-white transition hover:bg-navy-800 disabled:opacity-60"
              >
                {loading ? "Searching…" : "Track"}
              </button>
            </form>
          </Reveal>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 text-sm font-medium text-red-600"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {result && (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-navy-900/5"
            >
              <div className="border-b border-slate-100 bg-slate-50/80 px-6 py-5 md:px-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Shipment
                    </p>
                    <p className="mt-1 font-mono text-lg font-semibold text-navy-900">{result.id}</p>
                  </div>
                  <span
                    className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide ${badgeClass(
                      result.currentStage,
                      result.currentStage
                    )}`}
                  >
                    {result.stages.find((s) => s.key === result.currentStage)?.label ?? "Status"}
                  </span>
                </div>
                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-xs font-medium text-slate-500">
                    <span>Progress</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-600"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              </div>

              <div className="px-6 py-8 md:px-8">
                <ol className="relative">
                  {result.stages.map((stage, i) => (
                    <li key={stage.key} className="relative flex gap-5 pb-12 last:pb-0">
                      {i < result.stages.length - 1 && (
                        <div
                          className={`absolute left-[19px] top-10 h-[calc(100%-0.5rem)] w-0.5 ${
                            stage.completed ? "bg-navy-900/80" : "bg-slate-200"
                          }`}
                          aria-hidden
                        />
                      )}
                      <div
                        className={`relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          stage.completed ? "bg-navy-900 text-white" : "bg-slate-200 text-slate-500"
                        }`}
                      >
                        {i + 1}
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-semibold text-navy-900">{stage.label}</h3>
                          <span
                            className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase ${badgeClass(
                              stage.key,
                              result.currentStage
                            )}`}
                          >
                            {stage.completed
                              ? stage.key === result.currentStage
                                ? "Current"
                                : "Done"
                              : "Pending"}
                          </span>
                        </div>
                        {stage.timestamp && (
                          <p className="mt-1 text-sm text-slate-500">{stage.timestamp}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!result && !loading && (
          <Reveal>
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white/50 p-12 text-center text-slate-500">
              Enter a tracking ID above to load the timeline and progress view.
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
}
