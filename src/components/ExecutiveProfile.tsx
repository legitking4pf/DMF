"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ShieldCheck, Fingerprint, Activity } from 'lucide-react';
import Link from 'next/link';

export default function ExecutiveProfile() {
  const positions = [
  {
    role: "Chief Administration Officer",
    company: "Grupo Financiero Atlántida",
    url: "https://www.grupofinancieroatlantida.com",
    tag: "Institutional Governance",
    ref: "GFA-CAO-2030"
  },
  {
    role: "Chief Technology Officer",
    company: "Banco Atlántida Honduras",
    url: "https://www.bancatlan.hn",
    tag: "Digital Infrastructure",
    ref: "BA-CTO-CORE"
  },
  {
    role: "Founder & Creative Lead",
    company: "KONCEPTO Décor",
    url: "https://www.konceptodecor.com",
    tag: "Design Innovation",
    ref: "KD-EST-2018"
  }];
  
  return (
    <section id="profile" className="relative py-24 md:py-40 bg-[#FBFBF9] text-obsidian overflow-hidden border-t border-gold/10">
      {/* BACKGROUND DECOR: Blueprints */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" className="stroke-obsidian fill-none">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* HEADER: Institutional Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-12">
              <ShieldCheck className="text-gold w-4 h-4" />
              <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase">Official Executive Mandate</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-6xl font-serif italic tracking-tighter leading-[] mb-0"
            >
              Strategic <br /> <span className="not-italic font-black text-obsidian uppercase">Sovereignty</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <div className="space-y-2">
              <p className="text-obsidian font-bold text-2xl uppercase tracking-tighter">David Moro Fernandez</p>
              <div className="flex items-center lg:justify-end gap-3 text-gold/60 text-[11px] font-mono tracking-widest uppercase font-bold">
                 <Fingerprint size={14} /> Ref: 71-DMF-GFA
              </div>
            </div>
          </div>
        </div>

        {/* THE POSITIONS LEDGER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8">
            <div className="space-y-0 border-t border-obsidian/20">
              {positions.map((pos, idx) => (
                <motion.a
                  key={idx}
                  href={pos.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.8 }}
                  className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-obsidian/10 hover:bg-white transition-all duration-500 px-6"
                >
                  <div className="flex gap-8 items-start">
                    <span className="text-gold font-mono text-xs pt-1 opacity-40 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.4em] text-gold font-black block mb-3">
                        {pos.tag}
                      </span>
                      <h3 className="text-2xl md:text-4xl font-display uppercase tracking-tight group-hover:text-gold transition-colors">
                        {pos.role}
                      </h3>
                      <p className="text-xs font-mono text-ash mt-2 opacity-0 group-hover:opacity-100 transition-all">ID: {pos.ref}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mt-6 md:mt-0">
                    <span className="text-[13px] uppercase tracking-widest font-bold text-obsidian/40 group-hover:text-obsidian transition-colors">
                      {pos.company}
                    </span>
                    <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all">
                      <ArrowUpRight size={18} className="text-gold group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* NARRATIVE SECTION */}
            <div className="mt-24 space-y-12">
               <h4 className="text-gold font-bold tracking-[0.6em] text-[10px] uppercase">Strategic Intent</h4>
               <p className="text-obsidian font-bold text-2xl uppercase tracking-tighter">
                Architecting the permanent system that bridge the gap between cloud-native governance and Spanish Modernist aesthetics.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-ash text-lg font-light leading-relaxed content-justify">
                <p> As a dual-mandate executive within the GFA ecosystem, David Moro Fernandez maintains a singular focus: the absolute elimination of operational friction. Through high-precision Digital Integration and administrative rigor, he secures the velocity of wealth across regional borders, aligning every milestone with a Strategic Growth Network built for long-term sustainability.
              </p>
              <p>This philosophy extends into his curation of the physical realm via KONCEPTO Décor. Here, he employs architectural essentialism to curate minimalist environments that reflect the structural integrity and high-end privacy of a well-governed financial system        </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR: SYSTEM BENCHMARKS */}
          {/* SIDEBAR: EXECUTIVE MANIFESTO */}
<div className="lg:col-span-4 flex flex-col">
  <div className="relative p-0 border-t-[1px] border-obsidian/20 pt-12">
    {/* Identification */}
    <div className="mb-12">
      <h4 className="text-gold uppercase tracking-[0.4em] text-[10px] font-black mb-2">Institutional Manifesto</h4>
      <p className="text-[10px] font-mono text-ash/60 uppercase tracking-widest">Document No. GFA-20dBz-STRAT</p>
    </div>
    <div className="space-y-10 text-lg leading-relaxed text-ash antialiased content-justify font-light">
      <p>
        The modernization of a century-old financial legacy does not occur through the mere adoption of software; it is a structural reimagining of how authority is exercised in a digital landscape. At the group level, my focus remains on the convergence of institutional trust and systemic velocity. We are building a sovereign framework that treats digital infrastructure not as a utility, but as a strategic asset—one that must be as resilient as the capital it protects.
      </p>

      <p>
        In the Central American corridor, where cross-border complexity often introduces operational friction, we have shifted the paradigm toward absolute integration. By enforcing a single standard of digital governance across our regional footprint, we eliminate the traditional vulnerabilities of legacy banking. This is the "Sovereign Tier"—a state of structural consistency where every transaction and administrative action is executed with mathematical precision.
      </p>

      <p>
        This rigor is mirrored in my pursuit of architectural essentialism. Whether I am architecting a banking core or a physical environment through KONCEPTO, the objective is the same: the removal of the superfluous to expose the permanence of the form. We are moving away from the ephemeral trends of the industry, focusing instead on the creation of high-precision environments—both digital and physical—that reflect the structural integrity required of a global financial leader.
      </p>

      <p>
        The future of wealth acceleration depends on this synthesis of governance and aesthetics. It is about creating systems that do not just function, but endure.
      </p>
    </div>

    {/* Verification Footer */}
    <div className="mt-16 pt-10 border-t border-obsidian/5 flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-gold">Validated for Release</p>
        <p className="text-[11px] font-display uppercase tracking-tighter text-obsidian">Executive Office // GFA</p>
      </div>
      <div className="opacity-10 grayscale">
        <Fingerprint size={40} strokeWidth={1.0} />
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}