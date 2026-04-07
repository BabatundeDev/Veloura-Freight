import { useId, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import truckBg from "../assets/images/truck.jpg";

const TRUCK_COUNT = 3;
const TRUCK_LOOP_S = 20;

function TruckSvg() {
  const uid = useId().replace(/:/g, "");
  const cab = `hero-cab-${uid}`;
  const trailer = `hero-trailer-${uid}`;

  return (
    <svg
      viewBox="0 0 200 64"
      className="h-16 w-[200px] shrink-0 md:h-[5rem] md:w-[240px]"
      aria-hidden
    >
      <defs>
        <linearGradient id={cab} x1="0" x2="1" y1="0" y2="1">
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id={trailer} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3f4f64" />
          <stop offset="55%" stopColor="#2d3a4d" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>
      <g>
        <rect
          x="8"
          y="18"
          width="110"
          height="36"
          rx="4"
          fill={`url(#${trailer})`}
          stroke="#475569"
          strokeWidth="1.25"
        />
        <rect x="16" y="26" width="36" height="14" rx="2" fill="#0f172a" opacity="0.5" />
        <rect x="58" y="26" width="36" height="14" rx="2" fill="#0f172a" opacity="0.5" />
        <text x="22" y="40" fill="#64748b" fontSize="8.5" fontWeight="600" fontFamily="system-ui">
          VELOURA
        </text>
        <path
          d="M118 54V22h32l18 18v14h-14"
          fill={`url(#${cab})`}
          stroke="#475569"
          strokeWidth="1.25"
        />
        <rect x="128" y="28" width="22" height="14" rx="2" fill="#334155" opacity="0.35" />
        <circle cx="38" cy="56" r="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
        <circle cx="38" cy="56" r="3" fill="#475569" />
        <circle cx="98" cy="56" r="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
        <circle cx="98" cy="56" r="3" fill="#475569" />
        <circle cx="152" cy="56" r="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
        <circle cx="152" cy="56" r="3" fill="#475569" />
      </g>
    </svg>
  );
}

export function Hero() {
  const [truckCount, setTruckCount] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 768 ? 2 : TRUCK_COUNT
  );

  useEffect(() => {
    const handleResize = () => {
      setTruckCount(window.innerWidth < 768 ? 2 : TRUCK_COUNT);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-navy-950">
      {/* Background image layer */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${truckBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Highway / global backdrop */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
      linear-gradient(180deg, rgba(15,24,41,0.2) 0%, rgba(15,24,41,0.95) 100%),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 48px,
        rgba(212,146,46,0.08) 48px,
        rgba(212,146,46,0.08) 50px
      ),
      linear-gradient(0deg, #0a101c 0%, #1a2844 45%, #0f1829 100%)
    `,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,146,46,0.15),transparent)]" />

      {/* Animated convoy */}
      <div className="pointer-events-none absolute bottom-[22%] left-0 right-0 z-[5] h-32 md:bottom-[20%] md:h-36">
        {Array.from({ length: truckCount }, (_, i) => (
          <div
            key={i}
            className="absolute bottom-0 left-0 flex will-change-transform"
            style={{
              animation: `truck-drive ${TRUCK_LOOP_S}s linear infinite`,
              animationDelay: `${-(i * TRUCK_LOOP_S) / truckCount}s`,
            }}
          >
            <TruckSvg />
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-24 pt-12 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold-400 md:text-sm">
            Veloura Freight Logistics
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            Global Freight Solutions Without Limits
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300 md:text-xl">
            Air, Sea & Land Cargo Delivered with Precision and Speed
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/tracking"
            className="inline-flex items-center justify-center rounded-lg bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-gold-500/25 transition hover:bg-gold-400"
          >
            Track Shipment
          </Link>
          <Link
            to="/quote"
            className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-gold-500/50 hover:bg-white/10"
          >
            Request a Quote
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8 text-center md:text-left"
        >
          {[
            ["100+", "Countries served"],
            ["24/7", "Operations desk"],
            ["99.2%", "On-time performance"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="text-2xl font-bold text-white md:text-3xl">{n}</div>
              <div className="text-xs text-slate-400 md:text-sm">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-slate-500">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="text-xs uppercase tracking-widest"
        >
          Scroll
        </motion.div>
      </div>
    </section>
  );
}