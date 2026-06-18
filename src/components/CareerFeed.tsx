"use client";
import React from 'react';
import NextImage from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, ShieldCheck, FileText } from 'lucide-react';

const ledgerData = [
   {
   id: "001",
   category: "Expansion",
   title: "National Sovereignty: New Branch Consolidations",
   desc: "Strategic expansion into La Ceiba and Quimistán, strengthening the physical footprint of the GFA strategic growth network.",
   image: "https://www.bancatlan.hn/sala-de-prensa/img/2026-01-09-plaza-teknos-quimistan/portada.jpg",
   date: "JAN 9, 2026",
   link: "https://www.bancatlan.hn/sala-de-prensa/2026-01-09-plaza-teknos-quimistan.php",
   cta: "View Strategy",
   tag: "Infrastructure"
 },
  {
    id: "002",
    category: "Global Reach",
    title: "VIII CEAPI Congress: Spain Market Integration",
    desc: "Guillermo Bueso highlights GFA as the first Honduran financial group authorized for Spanish banking operations via EBN Banco.",
    image: "https://cdn.prod.website-files.com/68363d5a1fb3537423263bff/6841f518e2c7e3dea8ea93a4_ceapi-2024-portada.jpg",
    date: "JUNE 04, 2025",
    link: "https://invatlan.hn/blogs/guillermo-bueso-presidente-de-grupo-financiero-atlantida-participa-en-el-viii-congreso-ceapi-sobre-inversion-latinoamericana-en-espana",
    cta: "Market Analysis",
    tag: "M&A"
  },
  {
    id: "003",
    category: "Subsidiaries",
    title: "AFP CONFIA's image is evolving to reaffirm its strength and track record, as well as its commitment to innovation and excellence in service.",
    desc: "CONFIA's visual evolution is a manifestation of its continuous pursuit of excellence, reflecting its adaptability and forward-thinking vision. This rebranding modernizes its market presence and reinforces its membership in Grupo Financiero Atlántida, a financial organization recognized for its strength and leadership, backed by over 111 years of experience, more than 260 offices, and 6,000 employees.",
    image: "https://cdn.prod.website-files.com/68363d5a1fb3537423263bff/683fcb25cfb6588ffd8a90be_Toma%20ae%CC%81rea%20AFP%20Confia%20-%20El%20Salvador-p-1080.jpg",
    date: "JUN 04, 2025",
    link: "https://invatlan.hn/blogs/la-imagen-de-afp-confia-evoluciona-para-reconfirmar-su-solidez-y-trayectoria-asi-como-su-compromiso-con-la-innovacion-y-la-excelencia-en-el-servicio",
    cta: "Read press",
    tag: "Press Room"
  }
];

export default function ExecutiveLedger() {
  return (
    <section id="ledger" className="py-24 md:py-40 bg-[#F6F6F3] text-obsidian px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER: Institutional Typography */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24 border-b border-obsidian/10 pb-12">
          <div className="space-y-4">
            <div className="flex mb-12 items-center gap-3">
               <ShieldCheck className="text-gold w-4 h-4" />
               <span className="text-gold font-bold text-[10px] uppercase tracking-[0.5em]">from the Group Governance Hub</span>
            </div>
            <motion.h2 initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }} className="text-3xl md:text-6xl font-serif tracking-tighter leading-[1.1]">
              The <span className="italic font-light">Executive</span> <br />
              <span className="font-bold">Ledger</span>
            </motion.h2>
          </div>
          <div className="max-w-xs space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-obsidian/40 content-justify">Executive Log // Leadership & Regional Milestones </p>
            <p className="text-lg content-justify font-light leading-relaxed text-ash">
A centralized repository of David Moro Fernandez’s leadership updates, management insights, and real-time synchronization of regional milestones. This feed tracks the high-velocity digital transformations and investment partnerships orchestrated across Grupo Financiero Atlántida and EBN Group subsidiaries, offering a direct view into the execution of the Group leadership exercises        </p>
          </div>
        </div>

        {/* LEDGER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {ledgerData.map((item, index) => (
            <motion.article 
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white border border-obsidian/5 p-2 shadow-sm hover:shadow-2xl hover:shadow-gold/10 transition-all duration-700"
            >
              {/* IMAGE ENGINE */}
              <div className="relative aspect-[16/10] overflow-hidden bg-obsidian">
                <NextImage
                  src={item.image} 
                  alt={item.title} 
                  fill
                  priority
                  sizes="(max-width: 1024px) d100vw, 33vw"
                  className="object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute top-0 right-0 p-4">
                   <div className="bg-obsidian/80 backdrop-blur-md px-3 py-1 border-l-2 border-gold text-[9px] font-bold text-white uppercase tracking-widest">
                     {item.tag}
                   </div>
                </div>
              </div>

              {/* DATA CONTENT */}
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gold font-mono text-xs">{item.id}</span>
                  <div className="flex items-center gap-2 text-obsidian/40 text-[10px] font-bold uppercase tracking-widest">
                    <Clock size={10} /> {item.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold uppercase tracking-tighter leading-tight h-14 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-sm content-justify font-light leading-relaxed text-ash line-clamp-3">
                  {item.desc}
                </p>

                <div className="pt-6 border-t border-obsidian/5">
                  <a 
                    href={item.link}
                    className={`flex items-center justify-between w-full text-[10px] font-bold uppercase tracking-[0.3em] transition-all group/btn
                      `}
                  >
                    <span>{item.cta}</span>
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* FOOTER: SYSTEM STATUS */}
        <div className="mt-24 pt-12 border-t border-obsidian/10 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-ash">System Integrity</span>
                <span className="text-xs font-mono text-green-600 font-bold">● OPERATIONAL</span>
              </div>
              <div className="w-px h-8 bg-obsidian/10" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-ash">UTC Synchronization</span>
                <span className="text-xs font-mono">Real-time</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
