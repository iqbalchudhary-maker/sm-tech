import Link from "next/link";
import { Github, Linkedin, MessageCircle, MapPin } from "lucide-react";
import { navItems } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-surfaceSub py-16">
      <div className="section-shell grid gap-12 md:grid-cols-3">
        <div>
          <p className="text-2xl font-black text-slate-900 tracking-tighter uppercase">SM <span className="text-indigo-600">Technology</span></p>
          <p className="text-[10px] text-slate-500 mt-2 tracking-[0.2em] uppercase font-bold">Premier AI Automation Agency</p>
          <div className="mt-8 flex gap-4">
            <a href="#" className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all shadow-sm">
              <Linkedin size={18} />
            </a>
            <a href="#" className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm">
              <Github size={18} />
            </a>
            <a href="#" className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all shadow-sm">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div>
          <p className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-8">Quick Navigation</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-2 font-semibold">
                  <div className="h-1 w-1 bg-indigo-600 rounded-full" />
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/admin" className="text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-2 font-semibold">
                <div className="h-1 w-1 bg-indigo-600 rounded-full" />
                Admin
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <p className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-2">Global Presence</p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100 shadow-sm">
                <MapPin size={18} className="text-indigo-600" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-900 uppercase tracking-tighter mb-1">Head Office (Pakistan)</p>
                <p className="text-sm text-slate-600 font-bold leading-relaxed">Office No. 9, 2nd Floor, Shoukat Plaza, Temple Road, Lahore.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100 shadow-sm">
                <MapPin size={18} className="text-indigo-600" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-900 uppercase tracking-tighter mb-1">Branch Office (Pakistan)</p>
                <p className="text-sm text-slate-600 font-bold leading-relaxed">1st Floor, USWA Group of Colleges, Kalri Bypass Road, Bhowana, Dist. Chiniot.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100 shadow-sm">
                <MapPin size={18} className="text-indigo-600" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-900 uppercase tracking-tighter mb-1">International (UAE)</p>
                <p className="text-sm text-slate-600 font-bold leading-relaxed">Business Center, Dubai, United Arab Emirates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-shell mt-16 pt-10 border-t border-slate-200 text-center">
        <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">
          &copy; {new Date().getFullYear()} SM Technology. All rights reserved. Registered under Partnership Act 1932.
        </p>
      </div>
    </footer>
  );
}
