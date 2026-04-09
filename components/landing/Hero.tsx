"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/data";

export function Hero() {
  const [idx, setIdx] = useState(0);
  const currentSlide = heroSlides[idx];

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((v) => (v + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="section-shell py-16 md:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
        <h1 className="text-3xl font-extrabold leading-[1.2] tracking-tight text-white md:text-5xl">
  Architecting <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
    Smart AI
  </span> Solutions.
</h1>
<p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
  We build <span className="text-white font-medium">high-performance AI Automation Systems</span> designed to 
  streamline your business operations and <span className="text-neonBlue font-semibold">skyrocket your sales.</span> 
  From autonomous lead generation to intelligent reasoning agents, we turn manual workflows into 
  <span className="text-white"> 24/7 profit-generating machines.</span>
</p>
        </div>

        <div
          className="h-[300px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-glow"
          style={{ perspective: "1200px" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 60, rotateY: 12, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, x: -60, rotateY: -10, scale: 0.98 }}
              whileHover={{ rotateY: -4, rotateX: 2, scale: 1.01 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-neonBlue/20 p-6"
              style={{
                backgroundImage: `url(${currentSlide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transformStyle: "preserve-3d"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slateDeep/85 via-slateDeep/55 to-slateDeep/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-slateDeep/75 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_45%)]" />

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white">{currentSlide.title}</h3>
                <p className="mt-2 text-sm text-slate-200">{currentSlide.subtitle}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
