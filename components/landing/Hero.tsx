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
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-50/60 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-50/60 blur-[120px] rounded-full" />

      <div className="section-shell relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-bold text-indigo-700 uppercase tracking-wider">Leading AI Automation Company</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-[1.1]">
            Architecting <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">Smart AI</span> Solutions for Global Enterprises
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mb-10 font-medium">
            We deliver <span className="text-indigo-600 font-bold">Enterprise AI Solutions</span>, 
            <span className="text-violet-600 font-bold">Custom SaaS</span>, and 
            <span className="text-purple-600 font-bold">Digital Transformation</span> strategies 
            designed to eliminate manual workflows and maximize operational efficiency.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 hover:shadow-floating transition-all transform hover:-translate-y-1">
              Start Your Transformation
            </button>
            <button className="px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 font-bold text-lg hover:bg-slate-50 transition-all shadow-sm hover:border-indigo-200">
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
          <div className="relative group rounded-[3rem] border border-indigo-100 bg-white p-1 shadow-floating overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/40 via-violet-50/40 to-purple-50/40" />
            
            <div className="relative bg-white/90 rounded-[2.9rem] p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 backdrop-blur-md">
              <div className="flex-1 text-left">
                <div className="flex items-center gap-3 mb-4 text-rose-500 font-bold tracking-widest uppercase">
                  <Gift className="w-6 h-6" />
                  Exclusive Friday Offer
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                  Get <span className="text-indigo-600">30% OFF</span> on All AI Automation Services
                </h2>
                <p className="text-slate-600 text-lg mb-8 font-medium">
                  Transform your business with our premium AI agents, RAG systems, and Custom SaaS solutions at an unbeatable price. Limited time offer!
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {serviceIcons.map(({ Icon, label, color }) => (
                    <div key={label} className="flex items-center gap-2 text-sm text-slate-700 font-semibold">
                      <Icon className={`w-5 h-5 ${color.replace('400', '600')}`} />
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
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-3xl border border-indigo-100 flex items-center justify-center shadow-inner overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.2),transparent_70%)]" />
                    </div>
                    <Brain className="w-32 h-32 text-indigo-600 animate-pulse" />
                    
                    {/* Floating Service Icons */}
                    <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 left-10">
                      <Zap className="w-10 h-10 text-yellow-500" />
                    </motion.div>
                    <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-10 right-10">
                      <Rocket className="w-12 h-12 text-violet-500" />
                    </motion.div>
                    <motion.div animate={{ x: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 right-4">
                      <Shield className="w-8 h-8 text-emerald-500" />
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
