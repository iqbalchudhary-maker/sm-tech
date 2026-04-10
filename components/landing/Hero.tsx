"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Brain, Rocket, Shield, BarChart, Gift } from "lucide-react";

const serviceIcons = [
  { Icon: Brain, color: "text-blue-400", label: "Enterprise AI" },
  { Icon: Zap, color: "text-yellow-400", label: "Automation" },
  { Icon: Rocket, color: "text-purple-400", label: "SaaS" },
  { Icon: Shield, color: "text-green-400", label: "Digital Transformation" },
  { Icon: BarChart, color: "text-pink-400", label: "ROI Focused" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />

      <div className="section-shell relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-neonBlue" />
            <span className="text-sm font-medium text-slate-300">Leading AI Automation Company</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-6">
            Architecting <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Smart AI</span> Solutions for Global Enterprises
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-10">
            We deliver <span className="text-white font-semibold">Enterprise AI Solutions</span>, 
            <span className="text-white font-semibold">Custom SaaS</span>, and 
            <span className="text-white font-semibold">Digital Transformation</span> strategies 
            designed to eliminate manual workflows and maximize operational efficiency.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="px-8 py-4 rounded-2xl bg-neonBlue text-slateDeep font-bold text-lg hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all">
              Start Your Transformation
            </button>
            <button className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md">
              View Our Portfolio
            </button>
          </div>
        </motion.div>

        {/* Friday Offer Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative w-full max-w-6xl mx-auto"
        >
          <div className="relative group rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-1 backdrop-blur-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
            
            <div className="relative bg-slateDeep/80 rounded-[2.9rem] p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-left">
                <div className="flex items-center gap-3 mb-4 text-pink-400 font-bold tracking-widest uppercase">
                  <Gift className="w-6 h-6" />
                  Exclusive Friday Offer
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Get <span className="text-neonBlue">30% OFF</span> on All AI Automation Services
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  Transform your business with our premium AI agents, RAG systems, and Custom SaaS solutions at an unbeatable price. Limited time offer!
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {serviceIcons.map(({ Icon, label, color }) => (
                    <div key={label} className="flex items-center gap-2 text-sm text-slate-300">
                      <Icon className={`w-5 h-5 ${color}`} />
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              {/* 3D Animated Placeholder */}
              <div className="relative w-full lg:w-[400px] h-[300px] perspective-1000">
                <motion.div
                  animate={{ 
                    rotateY: [0, 360],
                    rotateX: [0, 10, 0, -10, 0]
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="w-full h-full relative preserve-3d"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/20 to-purple-600/20 rounded-3xl border border-white/20 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.4),transparent_70%)]" />
                    </div>
                    <Brain className="w-32 h-32 text-neonBlue animate-pulse" />
                    
                    {/* Floating Service Icons */}
                    <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 left-10">
                      <Zap className="w-10 h-10 text-yellow-400" />
                    </motion.div>
                    <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-10 right-10">
                      <Rocket className="w-12 h-12 text-purple-400" />
                    </motion.div>
                    <motion.div animate={{ x: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 right-4">
                      <Shield className="w-8 h-8 text-green-400" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
