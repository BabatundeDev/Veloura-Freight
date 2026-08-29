import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { resolveTracking, type ShipmentStage, type TrackingResult } from "../data/mockTracking";

const stageIndex: Record<ShipmentStage, number> = {
  received: 0,
  customs: 1,
  transit: 2,
  delivered: 3,
};

function getBadgeStyles(stage: ShipmentStage, active: ShipmentStage): string {
  const isDone = stageIndex[stage] <= stageIndex[active];
  if (!isDone) return "bg-slate-100 text-slate-400 border border-slate-200";
  if (stage === "delivered" && active === "delivered") {
    return "bg-emerald-50 text-emerald-700 border border-emerald-200/60 font-bold";
  }
  if (stage === active) return "bg-gold-500/10 text-gold-700 border border-gold-500/30 font-bold";
  return "bg-slate-100 text-slate-700 border border-slate-200 font-medium";
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

  const progress = result ? ((stageIndex[result.currentStage] + 1) / 4) * 100 : 0;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">
              Enterprise tracking
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Shipment tracking
            </h1>
            <p className="mt-4 max-w-2xl text-slate-600">
              Enter your Veloura Freight tracking ID to view milestones. Demo IDs:{" "}
              <span className="font-mono font-bold text-slate-800">PF2026001</span>–
              <span className="font-mono font-bold text-slate-800">PF2026004</span>.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={handleTrack} className="mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Tracking ID"
                className="min-h-[52px] flex-1 rounded-xl border border-slate-200 bg-white px-5 text-slate-900 outline-none ring-gold-500/20 transition focus:border-gold-500 focus:ring-2"
              />
              <button
                type="submit"
                disabled={loading}
                className="min-h-[52px] rounded-xl bg-slate-950 px-8 text-sm font-bold text-white transition hover:bg-slate-800 disabled:opacity-60"
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
                className="mt-4 text-sm font-semibold text-red-600"
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
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="border-b border-slate-100 bg-slate-50/80 px-6 py-5 md:px-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Shipment
                    </p>
                    <p className="mt-1 font-mono text-lg font-bold text-slate-900">{result.id}</p>
                  </div>
                  <span className={`rounded-full px-4 py-1.5 text-xs uppercase tracking-wide ${getBadgeStyles(result.currentStage, result.currentStage)}`}>
                    {result.stages.find((s) => s.key === result.currentStage)?.label ?? "Status"}
                  </span>
                </div>
                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-xs font-semibold text-slate-500">
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
                          className={`absolute left-[19px] top-10 h-[calc(100%-0.5rem)] w-0.5 ${stage.completed ? "bg-slate-900" : "bg-slate-200"}`}
                          aria-hidden
                        />
                      )}
                      <div className={`relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${stage.completed ? "bg-slate-900 text-white" : "bg-slate-200 text-slate-400"}`}>
                        {i + 1}
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-bold text-slate-900">{stage.label}</h3>
                          <span className={`rounded-md px-2 py-0.5 text-[10px] uppercase ${getBadgeStyles(stage.key, result.currentStage)}`}>
                            {stage.completed ? (stage.key === result.currentStage ? "Current" : "Done") : "Pending"}
                          </span>
                        </div>
                        {stage.timestamp && (
                          <p className="mt-1 text-sm font-medium text-slate-500">{stage.timestamp}</p>
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
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center font-medium text-slate-400">
              Enter a tracking ID above to log your manifest telemetry.
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
}
