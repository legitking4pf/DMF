"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const imageSrc = "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/smal%20screen%20background";
  
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden"
      style={{ marginTop: "var(--header-height, 0px)", minHeight: "calc(100vh - var(--header-height, 0px))" }}
    >
      {/* 1. Background Layer with subtle zoom */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={imageSrc}
          alt="Hero background"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </motion.div>

      {/* 2. Content Layer */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            {/* High-End Label */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-gold font-medium border-l-2 border-gold pl-4 py-1">
                Institutional Mandate
              </span>
            </div>

            {/* Headline with Serif swap & tighter leading */}
            <h1 className="text-5xl md:text-7xl font-light text-stone-900 leading-[1.1] mb-8 tracking-tight italic-serif-fix">
              Financial <span className="font-serif italic text-stone-700">Governance</span> <br />
              Infrastructure for <br />
              Modern Institutions
            </h1>

            {/* Subtext with better typography */}
            <p className="max-w-xl text-stone-600 md:text-lg leading-relaxed mb-12 font-light text-justify">
              The professional portfolio of{" "}
              <span className="font-semibold text-stone-900 border-b border-gold-dark/30">
                David Moro Fernandez
              </span>
              . Architecting institutional-grade digital governance and fintech solutions for the global stage.
            </p>

            {/* Refined CTA */}
            <div className="flex flex-wrap gap-6">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-stone-900 text-white text-sm font-bold tracking-widest uppercase overflow-hidden transition-all"
              >
                <span className="relative z-10">Scroll Down</span>
                <div className="absolute inset-0 bg-stone-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. Decorative "Grid" lines (Optional for that 'Institutional' blueprint look) */}
      <div className="absolute inset-0 pointer-events-none border-x border-stone-100 mx-auto max-w-7xl opacity-50" />
    </section>
  );
}
