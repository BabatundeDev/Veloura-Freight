import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "../components/Reveal";

const STORAGE_KEY = "primefreight_quote_submissions";

export function Quote() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    cargoType: "",
    weight: "",
    origin: "",
    destination: "",
    deliveryType: "air" as "air" | "sea" | "land",
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      try {
        const prev = localStorage.getItem(STORAGE_KEY);
        const list = prev ? JSON.parse(prev) : [];
        list.push({ ...form, at: new Date().toISOString() });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      } catch {
        /* ignore */
      }
      setLoading(false);
      setDone(true);
    }, 1200);
  }

  return (
    <div className="min-h-[80vh] bg-slate-50">
      <div className="border-b border-slate-200 bg-gradient-to-br from-navy-900 to-navy-950 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Request a quote</h1>
            <p className="mt-4 max-w-2xl text-slate-400">
              Corporate-grade intake — we respond with lane options, transit ranges, and next steps within one business day.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-14 md:px-6 lg:px-8">
        <Reveal>
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-emerald-500/30 bg-emerald-50 p-10 text-center"
              >
                <p className="text-lg font-semibold text-emerald-900">Quote request received</p>
                <p className="mt-2 text-emerald-800/90">
                  Our operations desk will contact you shortly using the details provided.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-navy-900/5 md:p-10"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="block text-sm font-medium text-navy-800">
                    Full name
                    <input
                      required
                      value={form.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25"
                    />
                  </label>
                  <label className="block text-sm font-medium text-navy-800">
                    Company name
                    <input
                      required
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25"
                    />
                  </label>
                </div>

                <label className="block text-sm font-medium text-navy-800">
                  Cargo type
                  <input
                    required
                    placeholder="e.g. electronics, machinery, perishables"
                    value={form.cargoType}
                    onChange={(e) => update("cargoType", e.target.value)}
                    className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25"
                  />
                </label>

                <label className="block text-sm font-medium text-navy-800">
                  Weight (kg)
                  <input
                    required
                    type="number"
                    min={1}
                    value={form.weight}
                    onChange={(e) => update("weight", e.target.value)}
                    className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25"
                  />
                </label>

                <div className="grid gap-6 md:grid-cols-2">
                  <label className="block text-sm font-medium text-navy-800">
                    Origin
                    <input
                      required
                      value={form.origin}
                      onChange={(e) => update("origin", e.target.value)}
                      className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25"
                    />
                  </label>
                  <label className="block text-sm font-medium text-navy-800">
                    Destination
                    <input
                      required
                      value={form.destination}
                      onChange={(e) => update("destination", e.target.value)}
                      className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25"
                    />
                  </label>
                </div>

                <fieldset>
                  <legend className="text-sm font-medium text-navy-800">Delivery type</legend>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {(
                      [
                        ["air", "Air"],
                        ["sea", "Sea"],
                        ["land", "Land"],
                      ] as const
                    ).map(([v, label]) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => update("deliveryType", v)}
                        className={`rounded-lg border px-3 py-3 text-sm font-semibold transition ${
                          form.deliveryType === v
                            ? "border-gold-500 bg-gold-500/10 text-navy-900"
                            : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <button
                  type="submit"
                  disabled={loading}
                  className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-navy-900 py-4 text-sm font-semibold text-white transition hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className={loading ? "opacity-0" : ""}>Submit request</span>
                  {loading && (
                    <motion.span
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    </motion.span>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </div>
  );
}
