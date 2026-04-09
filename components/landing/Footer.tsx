import Link from "next/link";
import { Github, Linkedin, MessageCircle } from "lucide-react";
import { navItems } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950/70 py-14">
      <div className="section-shell grid gap-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-white">SM Technology</p>
          <p className="text-sm text-slate-400">IT Company</p>
          <div className="mt-4 flex gap-3 text-slate-300">
            <Linkedin size={18} />
            <Github size={18} />
            <MessageCircle size={18} />
          </div>
        </div>

        <div>
          <p className="font-medium text-white">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-slate-300 hover:text-neonBlue">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/admin" className="text-slate-300 hover:text-neonBlue">
                Admin Dashboard
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <div>
            <p className="font-medium text-white">Pakistan Office</p>
            <p className="text-sm text-slate-300">1st Floor, USWA College, Kalri By-Road, Bhowana</p>
            <div className="mt-2 h-20 rounded-xl border border-dashed border-white/20 bg-white/5 p-2 text-xs text-slate-400">
              Google Maps Embed Placeholder
            </div>
          </div>
          <div>
            <p className="font-medium text-white">UAE Office</p>
            <p className="text-sm text-slate-300">UAE Address Placeholder</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
