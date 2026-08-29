import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Hero } from "../components/Hero";
import { GlobalMap } from "../components/GlobalMap";
import { FreightCalculator } from "../components/FreightCalculator";
import { Reveal } from "../components/Reveal";

const highlights = [
  {
    title: "Air Freight",
    desc: "Priority uplift and consolidation across major trade lanes.",
    to: "/services#air",
  },
  {
    title: "Sea Freight",
    desc: "FCL and LCL programs with predictable sailing schedules.",
    to: "/services#sea",
  },
  {
    title: "Land Freight",
    desc: "Cross-border trucking and last-mile distribution.",
    to: "/services#land",
  },
];

export function Home() {
  return (
    <>
      <Hero />
      <GlobalMap />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
                  Capabilities
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Multimodal logistics for demanding supply chains
                </h2>
              </div>
              <Link
                to="/services"
                className="inline-flex w-fit items-center text-sm font-semibold text-gold-600 hover:text-gold-500"
              >
                View all services →
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={0.05 * i}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <Link
                    to={h.to}
                    className="block h-full rounded-2xl border border-slate-200 bg-slate-50/50 p-8 transition hover:border-gold-500/40 hover:shadow-lg"
                  >
                    <h3 className="text-xl font-bold text-slate-900">{h.title}</h3>
                    <p className="mt-3 text-slate-600">{h.desc}</p>
                    <span className="mt-6 inline-block text-sm font-bold text-gold-600">
                      Explore
                    </span>
                  </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FreightCalculator />

      {/* Added -mt-px and relative utilities to cleanly slide over and swallow the calculator line */}
      <section className="relative z-10 -mt-px bg-white pb-20 pt-0 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-16 text-center md:px-12 md:py-20">
            <Reveal>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Ready to move cargo with confidence?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                Share your lane, commodity, and timeline — our team responds with a structured quote and milestone plan.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  to="/quote"
                  className="inline-flex rounded-xl bg-slate-950 px-8 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-slate-800"
                >
                  Request a Quote
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
                >
                  Speak with us
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
