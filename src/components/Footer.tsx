"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Ensure motion is imported for your h2
import {
  Building2,
  MessageSquare,
  ShieldCheck,
  Globe,
  ArrowUpRight,
  Mail, // Swapped Instagram for Mail
  Linkedin,
  ArrowUp,
  ArrowRight,
  Copyright
} from 'lucide-react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | string>('2026');
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <footer id="footer" className="bg-[#050505] text-white/80 font-sans border-t border-white/10 relative overflow-hidden">
      
      {/* 1. TOP BAR: GLOBAL CONTEXT */}
      <div className="border-b border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            <span>Systems Nominal // DFJ Contact Core</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Tegucigalpa (HQ)</span>
            <span className="hidden md:inline text-white/20">|</span>
            <span>Central America</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* 2. BRAND IDENTITY */}
          <div className="md:col-span-4 space-y-8">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }} 
                className="text-2xl font-serif text-white tracking-tight mb-2"
              >
                David Moro Fernandez
              </motion.h2>
              <p className="text-xs text-[#c9a24a] uppercase tracking-[0.25em] font-bold">
                CAO & CTO // Grupo Financiero Atlántida 
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm text-gray-500 leading-relaxed">
                Have a strategic briefing or feedback for the Executive Office?
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-[#c9a24a] hover:text-black transition-all group"
              >
                Open Contact Channel <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex gap-4">
              <SocialLink href="https://hn.linkedin.com/company/grupofinancieroatlantida" icon={<Linkedin size={18} />} label="LinkedIn" />
              {/* UPDATED: Instagram changed to Email */}
              <SocialLink href="mailto: davidhambert4all@gmail.com" icon={<Mail size={18} />} label="Email Executive Office" />
              <SocialLink href="https://services.zangi.com/dl/conversation/9087642828" icon={<MessageSquare size={18} />} label="Zangi" />
            </div>
          </div>

          {/* 3. NAVIGATION (Cleaned per your instructions) */}
          <div className="md:col-span-2 md:col-start-6 space-y-6">
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em]">The Ecosystem</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <FooterLink href="https://www.bancatlan.hn">Banco Atlántida</FooterLink>
              <FooterLink href="#">KONCEPTO Décor</FooterLink>
              <FooterLink href="#">Wealth Acceleration</FooterLink>
            </ul>
          </div>

          {/* 4. GOVERNANCE */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em]">Governance</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <FooterLink href="#">Compliance Protocol</FooterLink>
              <FooterLink href="#">Digital Privacy</FooterLink>
              <FooterLink href="#">Investor Relations</FooterLink>
              <FooterLink href="#">Secure Access</FooterLink>
            </ul>
          </div>

          {/* 5. LOCATION */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em]">Regional HQ</h3>
            <div className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
              <Building2 className="text-[#c9a24a] shrink-0 mt-1" size={16} />
              <address className="not-italic">
                Centro Corporativo<br />
                Tegucigalpa, Honduras<br />
                <span className="text-xs text-gray-600 mt-2 block">Available 07:00 — 19:00 WAT</span>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* 6. BOTTOM BAR */}
      <div className="border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <Copyright size={12} /> {currentYear} DMF Executive Office.
            </span>
            <span className="hidden md:inline text-white/10">|</span>
            <span>All Rights Reserved.</span>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-[#c9a24a] transition-colors"
          >
            Return to Top
            <span className="p-2 border border-white/20 rounded-full group-hover:border-[#c9a24a] group-hover:bg-[#c9a24a]/10 transition-all">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="flex items-center gap-2 hover:text-[#c9a24a] hover:translate-x-1 transition-all duration-300 group"
    >
      <span className="w-1 h-1 bg-[#c9a24a] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
      {children}
    </a>
  </li>
);

const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <a 
    href={href}
    aria-label={label}
    className="w-10 h-10 flex items-center justify-center border border-white/20 text-white rounded-full hover:bg-[#c9a24a] hover:border-[#c9a24a] hover:text-black transition-all duration-300"
  >
    {icon}
  </a>
);
