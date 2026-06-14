"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  ShieldAlert, 
  Globe, 
  Zap, 
  Database, 
  Lock, 
  ArrowRight,
  Fingerprint
} from 'lucide-react';

const technicalMandates = [
  {
    id: "CORE-01",
    title: "Fintech Core Infrastructure",
    desc: "Architecting the backbone of regional digital banking. We deploy cloud-native, high-velocity systems designed for 100% operational uptime and regional scalability.",
    icon: <Cpu className="w-5 h-5" />,
    metrics: "High-Velocity Throughput",
    status: "Active"
  },
  {
    id: "SEC-02",
    title: "Cybersecurity & Sovereignty",
    desc: "Implementing zero-trust protocols and sovereign encryption layers to insulate GFA assets from global volatility and digital intrusion.",
    icon: <Lock className="w-5 h-5" />,
    metrics: "Zero-Trust Architecture",
    status: "Encrypted"
  },
  {
    id: "DATA-03",
    title: "Big Data & Predictive Growth",
    desc: "Leveraging strategic data nodes to identify wealth acceleration opportunities and optimize group-wide administrative efficiency.",
    icon: <Database className="w-5 h-5" />,
    metrics: "Algorithmic Precision",
    status: "Optimized"
  }
];

// Type-safe Variants for Next.js 16.1.1
const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const itemVars = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] as const // Fixed for build safety
    } 
  }
};

export default function CTODossier() {
  return (
    <section className="relative py-32 bg-obsidian text-bone overflow-hidden">
      {/* BACKGROUND ELEMENT: Digital Topography */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale">
        <div className="absolute inset-0 bg-grid-pattern" />
        <svg width="100%" height="100%" className="stroke-gold fill-none">
          <circle cx="100%" cy="0%" r="40%" strokeWidth="0.5" />
          <circle cx="100%" cy="0%" r="30%" strokeWidth="0.5" strokeDasharray="10 10" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* HEADER: Technical Command */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-2 bg-gold rounded-full animate-ping" />
              <span className="text-gold font-bold tracking-[0.6em] text-[10px] uppercase">
                CTO Mandate // Digital Sovereignty
              </span>
            </div>
            <h2 className="text-3xl md:text-6xl font-display uppercase tracking-tighter leading-none mb-8">
              Digital <br /> <span className="text-gold italic font-light">Integration</span>
            </h2>
            <p className="text-bone/60 text-lg md:text-xl font-light leading-relaxed">
              Orchestrating the convergence of high-end financial infrastructure. A core build in the Banco Atlantida Hn service base and scope 
              <span className="text-white font-medium italic">preferences.</span>
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end text-gold/40 font-mono text-[10px] tracking-[0.3em] uppercase space-y-2">
            <div className="flex items-center gap-2"><Fingerprint size={20} /> AUTH: DMF-71-EXEC</div>
            <div className="flex items-center gap-2"><Globe size={20} /> REGION: HND-ES-GT</div>
          </div>
        </div>

        {/* THE SYSTEM MATRIX */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10"
        >
          {technicalMandates.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVars}
              className="group relative p-10 md:p-16 bg-obsidian hover:bg-white/[0.02] transition-all duration-700 overflow-hidden"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-16">
                <div className="w-12 h-12 flex items-center justify-center border border-gold/30 text-gold bg-gold/5 group-hover:bg-gold group-hover:text-obsidian transition-all duration-500">
                  {item.icon}
                </div>
                <span className="font-mono text-[9px] text-gold/40 group-hover:text-gold transition-colors">
                  {item.id}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-6 mb-16">
                <h3 className="text-2xl md:text-3xl font-display uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {item.title}
                </h3>
                <p className="text-bone/50 text-sm md:text-base font-light leading-relaxed group-hover:text-bone transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* Card Footer: Metadata */}
              <div className="pt-8 border-t border-white/5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-black">Metric</span>
                  <span className="text-[10px] font-mono text-bone/70">{item.metrics}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-black">Status</span>
                  <span className="flex items-center gap-2 text-[10px] font-mono text-white italic">
                    <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                    {item.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ACTION: Strategic Connectivity */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-12 border-t border-white/5 pt-12">
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-gold font-bold text-2xl">Fair</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-bone/40 font-mono">Infrastructure Uptime</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-gold font-bold text-2xl">Tier IV</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-bone/40 font-mono">Security Protocol</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
