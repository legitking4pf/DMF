"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Fingerprint, Globe, X, Menu } from "lucide-react";

const NAV_ITEMS = [
  { label: "Hero", id: "hero" },
  { label: "DMF Gallery", id: "dmfgallery"},
  { label: "Dossier", id: "profile" },
  { label: "GfA Gallery", id: "gfagallery" },
  { label: "Portfolio", id: "whatIDo" },
  { label: "Ledger", id: "ledger" },
  { label: "Footer", id: "footer" }
];

export default function RefinedHeader() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Header animations
  const height = useTransform(scrollY, [0, 60], ["96px", "72px"]);
  const bg = useTransform(
    scrollY,
    [0, 60],
    ["rgba(0,0,0,0)", "rgba(4,4,4,0.92)"]
  );
  
  // Disable body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

useEffect(() => {
  // Set the initial height variable
  document.documentElement.style.setProperty('--header-height', '96px');
}, []);

  // ESC key listener
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);
  
  return (
    <>
      {/* --- MAIN HEADER (z-50) --- */}
      <motion.header
        style={{ height, backgroundColor: bg }}
        className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.03] backdrop-blur-sm"
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          
          {/* BRAND LOGO */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-[#FFFFFF] text-black flex items-center justify-center font-bold select-none text-sm">
              DMF
            </div>
            <div className="leading-tight  sm:block">
              <div className="text-sm tracking-widest text-white font-medium">
                MORO <span className="text-gold-light">F.</span>
              </div>
              <div className="text-[9px] uppercase tracking-wider text-white/70">
                Institutional Portfolio
              </div>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative group text-white/60 hover:text-white transition-colors duration-300"
              >
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium">
                  {item.label}
                </span>
                <span className="absolute left-0 right-0 -bottom-2 h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* DESKTOP ACTIONS + HAMBURGER */}
          <div className="flex items-center gap-4">
            <a
              href="/app/contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-[11px] font-bold uppercase tracking-widest text-gold border border-gold/20 rounded-full hover:bg-gold hover:text-black transition-all duration-300"
            >
              <Fingerprint size={14} />
              <span>Contact Office</span>
            </a>

            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="w-11 h-11 rounded-full border border-white/10 hover:border-gold/50 hover:text-gold flex items-center justify-center transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* --- MOBILE OVERLAY (z-[60] to cover header) --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#050505] text-white"
          >
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-8 h-full flex flex-col">
              
              {/* OVERLAY HEADER */}
              <div className="flex items-center justify-between mb-8">
                {/* Brand in Overlay */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#FFFFFF] text-black flex items-center justify-center font-bold text-sm">
                    DMF
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm tracking-widest text-white font-medium">
                      MORO <span className="text-gold-light">F.</span>
                    </div>
                    <div className="text-[9px] uppercase tracking-wider text-white/40">
                      Menu Active
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setOpen(false)}
                  className="w-11 h-11 rounded-full border border-white/10 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* NAV LINKS (Top Aligned) */}
              <nav className="flex flex-col gap-6 mt-12 px-2">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                    className="group flex items-center gap-4"
                  >
                    <span className="text-3xl md:text-5xl font-serif font-light text-white/80 group-hover:text-gold transition-colors duration-300">
                      {item.label}
                    </span>
                    <span className="h-[1px] bg-gold w-0 group-hover:w-12 transition-all duration-300 opacity-50" />
                  </motion.a>
                ))}
              </nav>

              {/* FOOTER (Simple, no buttons) */}
              <div className="mt-auto pt-8 border-t border-white/[0.05] flex items-center gap-3">
                <Globe size={14} className="text-gold-light" />
                <span className="text-[10px] uppercase tracking-widest text-gold-light">
                  Honduras · Spain · Guatemala
                </span>
              </div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
