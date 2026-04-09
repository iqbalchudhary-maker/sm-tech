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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slateDeep/55 backdrop-blur-3xl">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/0" />

      <div className="section-shell relative flex h-20 items-center justify-between">
        <div className="shrink-0 leading-tight">
          <div className="flex items-center gap-2">
            <p className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-xl font-extrabold tracking-wide text-transparent">
              SM Technology
            </p>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
          </div>
          <p className="text-xs text-slate-400">IT Company</p>
        </div>

        <nav className="hidden gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-sm text-slate-300 transition-all duration-300 hover:text-neonBlue"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-cyan-300 to-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/auth/login"
            className="rounded-xl border border-neonBlue/25 bg-white/[0.03] px-3 py-2 text-xs text-slate-100 transition-all duration-300 hover:border-neonBlue/50 hover:bg-neonBlue/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
          >
            Developer Login
          </Link>
          <Link
            href="/admin"
            className="rounded-xl border border-neonBlue/30 bg-neonBlue/20 px-3 py-2 text-xs font-medium text-neonBlue transition-all duration-300 hover:bg-neonBlue/30 hover:shadow-[0_0_24px_rgba(56,189,248,0.45)]"
          >
            Admin Dashboard
          </Link>

          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-1 rounded-xl border border-electricViolet/35 bg-electricViolet/20 px-3 py-2 text-xs text-electricViolet transition-all duration-300 hover:bg-electricViolet/30"
            >
              Contact Us <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-56 space-y-1 rounded-xl border border-white/15 bg-slate-900/95 p-2 shadow-violet"
                >
                  <a
                    href="https://wa.me/923010637955"
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-200 transition-all duration-300 hover:bg-white/5"
                  >
                    🇵🇰 Pakistan Office
                  </a>
                  <a
                    href="https://wa.me/971558245432"
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-200 transition-all duration-300 hover:bg-white/5"
                  >
                    🇦🇪 UAE Office
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button
          className="rounded-xl border border-white/15 p-2 text-slate-200 transition-all duration-300 hover:bg-white/10 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="section-shell pb-4 lg:hidden"
          >
            <div className="space-y-2 rounded-2xl border border-white/10 bg-slate-900/85 p-3 backdrop-blur-2xl">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-200 transition-all duration-300 hover:bg-white/5 hover:text-neonBlue"
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="/auth/login"
                className="block rounded-lg border border-neonBlue/25 px-3 py-2 text-sm text-slate-100 transition-all duration-300 hover:bg-neonBlue/10"
              >
                Developer Login
              </Link>
              <Link
                href="/admin"
                className="block rounded-lg bg-neonBlue/20 px-3 py-2 text-sm text-neonBlue transition-all duration-300 hover:bg-neonBlue/30"
              >
                Admin Dashboard
              </Link>
              <a
                href="https://wa.me/923010637955"
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg px-3 py-2 text-sm text-slate-200 transition-all duration-300 hover:bg-white/5"
              >
                🇵🇰 Pakistan Office
              </a>
              <a
                href="https://wa.me/971558245432"
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg px-3 py-2 text-sm text-slate-200 transition-all duration-300 hover:bg-white/5"
              >
                🇦🇪 UAE Office
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
