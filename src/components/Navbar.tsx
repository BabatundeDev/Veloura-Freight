import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BrandAirplaneMark } from "./BrandAirplaneMark";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/tracking", label: "Tracking" },
  { to: "/quote", label: "Get a Quote" },
  { to: "/industries", label: "Industries" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <BrandAirplaneMark className="text-slate-900" />
          <div className="leading-tight">
            <span className="block text-slate-900 text-sm font-semibold tracking-tight">
              Veloura Freight
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Logistics
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-4 lg:flex h-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative flex h-full items-center px-1 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{l.label}</span>
                  {/* Subtle, premium straight line layout at the bottom edge of the nav link on active */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-900 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/tracking"
            className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            Track Shipment
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="text-xl">{open ? "×" : "☰"}</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-3 text-sm font-bold transition-colors ${
                      isActive ? "bg-slate-50 text-slate-900" : "text-slate-500 hover:text-slate-900"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
