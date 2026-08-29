import { useId, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import truckBg from "../assets/images/truck.jpg";

const TRUCK_COUNT = 3;
const TRUCK_LOOP_S = 20;

function TruckLineSilhouette() {
  const uid = useId().replace(/:/g, "");
  const strokeGrad = `truck-stroke-${uid}`;

  return (
    <div className="relative shrink-0 will-change-transform h-16 w-[200px] md:h-[5rem] md:w-[240px]">
      <svg viewBox="0 0 200 64" className="absolute inset-0 h-full w-full">
        <defs>
          {/* A soft glowing gradient for the truck line paths */}
          <linearGradient id={strokeGrad} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.25)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.7)" />
          </linearGradient>
        </defs>
        
        {/* Main Trailer Shell Outline - Background fill removed */}
        <rect
          x="8"
          y="18"
          width="110"
          height="36"
          rx="4"
          fill="none"
          stroke={`url(#${strokeGrad})`}
          strokeWidth="1.25"
        />
        
        {/* Minimalist branding indicator text */}
        <text x="22" y="40" fill="rgba(255,255,255,0.4)" fontSize="8.5" fontWeight="800" fontFamily="system-ui" tracking-wider>
          VELOURA
        </text>
        
        {/* Front Cab Shell Outline - Background fill removed */}
        <path
          d="M118 54V22h32l18 18v14h-14"
          fill="none"
          stroke={`url(#${strokeGrad})`}
          strokeWidth="1.25"
        />
        
        {/* Cab Window Accent line */}
        <rect x="128" y="28" width="22" height="14" rx="2" fill="none" stroke={`url(#${strokeGrad})`} strokeWidth="1" opacity="0.5" />
        
        {/* Minimalist Wheel Positions */}
        <circle cx="38" cy="56" r="6" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.25" />
        <circle cx="98" cy="56" r="6" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.25" />
        <circle cx="152" cy="56" r="6" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.25" />
      </svg>
    </div>
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
    <section className="relative min-h-[100svh] overflow-hidden bg-slate-900">
      {/* Background image layer */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `url(${truckBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      {/* Animated Convoy Track Layer */}
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
            <TruckLineSilhouette />
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
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-gold-400 drop-shadow-md md:text-sm">
            Veloura Freight Logistics
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-md md:text-5xl lg:text-6xl font-serif">
            Global Freight Solutions Without Limits
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium text-white drop-shadow-md md:text-xl">
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
            className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-slate-800"
          >
            Track Shipment
          </Link>
          <Link
            to="/quote"
            className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-black/20 px-8 py-3.5 text-sm font-bold text-white transition hover:border-slate-300 hover:bg-black/30"
          >
            Request a Quote
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/20 pt-8 text-center md:text-left"
        >
          {[
            ["100+", "Countries served"],
            ["24/7", "Operations desk"],
            ["99.2%", "On-time performance"],
          ].map(([n, l]) => (
            <div key={l} className="drop-shadow-md">
              <div className="text-2xl font-bold text-white md:text-3xl">{n}</div>
              <div className="text-xs font-semibold text-slate-200 md:text-sm">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white drop-shadow-md">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="text-xs font-semibold uppercase tracking-widest"
        >
          Scroll
        </motion.div>
      </div>
    </section>
  );
}
