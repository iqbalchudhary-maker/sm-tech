"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-indigo-50/20" />

      <div className="section-shell relative flex h-20 items-center justify-between">
        <div className="shrink-0 leading-tight">
          <div className="flex items-center gap-2">
            <p className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-xl font-black tracking-tighter text-transparent uppercase">
              SM Technology
            </p>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
            </span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">AI Automation Agency</p>
        </div>

        <nav className="hidden gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-sm font-semibold text-slate-600 transition-all duration-300 hover:text-blue-600"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/auth/login"
            className="text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/admin"
            className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-lg"
          >
            Dashboard
          </Link>

          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
            >
              Contact Us <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-3 w-64 space-y-1 rounded-2xl border border-slate-100 bg-white p-2 shadow-2xl"
                >
                  <a
                    href="https://wa.me/923010637955"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-50 hover:text-blue-600"
                  >
                    <span className="text-lg">🇵🇰</span> Pakistan Office
                  </a>
                  <a
                    href="https://wa.me/971558245432"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-50 hover:text-blue-600"
                  >
                    <span className="text-lg">🇦🇪</span> UAE Office
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button
          className="rounded-xl border border-slate-200 p-2 text-slate-600 transition-all duration-300 hover:bg-slate-50 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="section-shell py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-bold text-slate-700 hover:text-blue-600"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="/auth/login"
                  className="flex h-12 items-center justify-center rounded-xl border border-slate-200 font-bold text-slate-700"
                >
                  Developer Login
                </Link>
                <Link
                  href="/admin"
                  className="flex h-12 items-center justify-center rounded-xl bg-slate-900 font-bold text-white"
                >
                  Admin Dashboard
                </Link>
                <a
                  href="https://wa.me/923010637955"
                  className="flex h-12 items-center justify-center rounded-xl bg-blue-600 font-bold text-white"
                >
                  Contact Pakistan
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
