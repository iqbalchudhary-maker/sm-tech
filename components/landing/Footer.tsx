import Link from "next/link";
import { Github, Linkedin, MessageCircle, MapPin } from "lucide-react";
import { navItems } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950/70 py-14">
      <div className="section-shell grid gap-10 md:grid-cols-3">
        <div>
          <p className="text-2xl font-black text-white tracking-tighter uppercase">SM <span className="text-neonBlue">Technology</span></p>
          <p className="text-sm text-slate-400 mt-2 italic tracking-widest uppercase font-bold">Premier AI Automation Agency</p>
          <div className="mt-6 flex gap-4 text-slate-300">
            <a href="#" className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-neonBlue hover:text-slateDeep transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-neonBlue hover:text-slateDeep transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-neonBlue hover:text-slateDeep transition-all">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div>
          <p className="font-bold text-white uppercase tracking-widest text-sm mb-6">Quick Navigation</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-slate-400 hover:text-neonBlue transition-colors flex items-center gap-2">
                  <div className="h-1 w-1 bg-neonBlue rounded-full" />
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/admin" className="text-slate-400 hover:text-neonBlue transition-colors flex items-center gap-2">
                <div className="h-1 w-1 bg-neonBlue rounded-full" />
                Admin
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <p className="font-bold text-white uppercase tracking-widest text-sm mb-2">Global Presence</p>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <MapPin size={18} className="text-neonBlue shrink-0" />
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-tighter mb-1">Head Office (Pakistan)</p>
                <p className="text-sm text-slate-400">Office No. 9, 2nd Floor, Shoukat Plaza, Temple Road, Lahore.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <MapPin size={18} className="text-neonBlue shrink-0" />
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-tighter mb-1">Branch Office (Pakistan)</p>
                <p className="text-sm text-slate-400">1st Floor, USWA Group of Colleges, Kalri Bypass Road, Bhowana, Dist. Chiniot.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <MapPin size={18} className="text-neonBlue shrink-0" />
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-tighter mb-1">International (UAE)</p>
                <p className="text-sm text-slate-400">Business Center, Dubai, United Arab Emirates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-shell mt-14 pt-8 border-t border-white/5 text-center">
        <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">
          &copy; {new Date().getFullYear()} SM Technology. All rights reserved. Registered under Partnership Act 1932.
        </p>
      </div>
    </footer>
  );
}
