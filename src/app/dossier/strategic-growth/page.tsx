'use client';
import { useState, useEffect } from 'react'; // Fixed import
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Standard Imports
import ExecutiveDoctrine from "@/components/ExecutiveDoctrine";
import { doctrines } from "@/data/doctrines.public";

// Strategic Dynamic Imports
const Timeline = dynamic(() => import("@/components/ExecutiveTimeline"), { 
  ssr: false,
  loading: () => <div className="h-96 w-full bg-neutral-50 animate-pulse rounded-lg" />
});

export default function CAODossier() {
  // HOOKS MUST BE INSIDE THE COMPONENT
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-6xl mx-auto px-6 py-20 space-y-24" 
      id="dossier"
    >
      {/* Executive Header */}
      <header className="border-b border-neutral-100 pb-12 space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-huge font-display uppercase leading-[0.95] tracking-tight">
              David Moro Fernandez
            </h1>
            <p className="uppercase text-xs tracking-[0.3em] text-neutral-300 mt-2">
  Chief Administrative Officer · Public Institutional Edition
</p>
          </div>
        </div>
      </header>

      {/* Strategic Growth Pillars */}
      <section className="grid grid-cols-1 gap-24">
        {doctrines.map((d, index) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
           <ExecutiveDoctrine {...d} />
          </motion.div>
        ))}
      </section>

      {/* Interactive Infrastructure Components */}
      <section className="space-y-12">
        <div className="space-y-2">
          <h2 className="text-sm uppercase tracking-widest text-neutral-400">Evolutionary Timeline</h2>
          <Timeline />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-sm uppercase tracking-widest text-neutral-400">Global Asset Footprint</h2>
        </div>
      </section>

      <footer className="mt-40 border-t border-neutral-100 pt-16 pb-24">
        <div className="max-w-6xl mx-auto flex flex-col space-y-12">
          
          {/* Strategic Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <p className="text-[9px] uppercase tracking-[0.6em] text-neutral-400">Institutional Position</p>
              <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-medium">
                Office of the Chief Administrative Officer
              </p>
            </div>
            
            <div className="md:col-span-2 space-y-2">
              <p className="text-[9px] uppercase tracking-[0.6em] text-neutral-400">Strategic Alignment</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] uppercase tracking-widest text-neutral-600">
                <span>Digital Integration</span>
                <span className="text-neutral-200">/</span>
                <span>Investment Partnerships</span>
                <span className="text-neutral-200">/</span>
                <span>Sustainability</span>
                <span className="text-neutral-200">/</span>
                <span>Design Culture</span>
              </div>
            </div>

            <div className="space-y-2 text-left md:text-right">
              <p className="text-[9px] uppercase tracking-[0.5em] text-neutral-400">Global Presence</p>
              <p className="text-[10px] uppercase tracking-widest text-neutral-600">
                Madrid · San Salvador · Tegucigalpa
              </p>
            </div>
          </div>

          {/* Legal & Growth Network */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-50 gap-4">
            <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-300">
              Strategic Growth Network · Proprietary & Confidential
            </p>
            <div className="h-[1px] w-12 bg-neutral-200 hidden md:block"></div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-400">
              {/* Added fallback to avoid blank space during hydration */}
              © {year || '2026'} Grupo Financiero Atlántida
            </p>
          </div>
        </div>
      </footer>
    </motion.main>
  );
}
