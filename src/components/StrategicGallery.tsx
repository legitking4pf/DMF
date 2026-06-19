"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import NextImage from "next/image";
import { AnimatePresence } from "framer-motion";
import { Maximize2, Layers, Map, ShieldCheck } from "lucide-react";

// Dynamically import Motion components to reduce initial JS payload
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: true }
);

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  span: string;
  coord: string;
  status: string;
}

const images: GalleryImage[] = [
  { id: 1, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/684082b08064a259b26c8ac3_final.jpg", title: "GFA Headquarters", span: "lg:col-span-1 lg:row-span-1", coord: "14.07°N / 87.19°W", status: "Operational" },
  { id: 2, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Fachada-1-Banco-Atlantida.webp", title: "Strategic Infrastructure", span: "lg:col-span-1 lg:row-span-2", coord: "Asset ID: 992-B", status: "Secure" },
  { id: 3, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/683c906b73a0abb8064ee03f__DAS1362.jpg", title: "Digital Integration", span: "lg:col-span-1 lg:row-span-1", coord: "Node: Tegucigalpa", status: "Encrypted" },
  { id: 4, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/ebn-Atlantida.jpg", title: "Corporate Excellence", span: "lg:col-span-1 lg:row-span-1", coord: "Regional Hub", status: "Active" },
  { id: 5, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/honduras-bancas_11242238_20250701164910.jpg", title: "Primary Asset Growth", span: "lg:col-span-2 lg:row-span-2", coord: "04.11°N / 09.21°E", status: "Strategic" },
  { id: 6, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/images%20%283%29.jpeg", title: "Wealth Acceleration", span: "lg:col-span-1 lg:row-span-1", coord: "Tier: Institutional", status: "Verified" },
  { id: 7, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/portada-09-02-2024-111-juntos.jpg", title: "Global Reach", span: "lg:col-span-1 lg:row-span-1", coord: "Network Bridge", status: "Optimized" },
  { id: 8, src: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/images.jpeg", title: "Sustainability", span: "lg:col-span-1 lg:row-span-1", coord: "ESG Protocol 1.1", status: "Compliant" },
];

const GalleryContent = () => {
  const [active, setActive] = useState(0);
  const [isBlueprint, setIsBlueprint] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const next = useCallback(() => {
    setActive(prev => (prev === images.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    autoplayRef.current = setInterval(next, 5000);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [next]);

  return (
    <section id="gfagallery" className="bg-bone py-24 md:py-40 border-t border-obsidian/5 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-12">
              <Layers className="text-gold w-4 h-4" />
              <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase">DMF Asset Portfolio.</span>
            </div>
            <h2 className="text-3xl md:text-6xl font-serif italic text-obsidian tracking-tighter leading-[1.1]">
              Company <br /> <span className="not-italic font-bold text-obsidian uppercase">Environments</span>
            </h2>
            <p className="mt-12 text-ash text-lg max-w-xl font-light leading-relaxed">
              A comprehensive visualization of David Moro Fernandez, The Group and Subsidiaries physical and digital footprint, mapped under DMF Oversight.
            </p>
          </div>
          <button 
            onClick={() => setIsBlueprint(!isBlueprint)}
            className="group flex items-center gap-4 bg-obsidian text-white px-8 py-4 rounded-sm transition-all hover:bg-gold hover:text-obsidian"
          >
            <Map className={`w-4 h-4 transition-transform ${isBlueprint ? 'rotate-180' : ''}`} />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
              {isBlueprint ? "Project Blueprint View" : "Deactivate Blueprint"}
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-none lg:grid-rows-3 gap-4 h-auto lg:h-[900px]">
          {images.map((img, idx) => (
            <MotionDiv 
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden group bg-obsidian ${img.span} min-h-[300px] lg:min-h-0`}
            >
              <NextImage 
                src={img.src} 
                alt={img.title}
                fill
                className={`object-cover transition-all duration-1000 group-hover:scale-110 
                  ${isBlueprint ? 'opacity-20 grayscale sepia' : 'opacity-90 grayscale-[0.3] group-hover:grayscale-0'}`}
                sizes="(max-width: 1280px) 100vw, 50vw"
              />

              <AnimatePresence>
                {isBlueprint && (
                  <MotionDiv 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                  />
                )}
              </AnimatePresence>

              <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 bg-obsidian/60 backdrop-blur-[2px]">
                <div className="flex justify-between items-start">
                   <div className="flex flex-col">
                      <span className="text-gold text-[9px] font-mono tracking-widest">{img.coord}</span>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-white text-[9px] uppercase tracking-tighter">{img.status}</span>
                      </div>
                   </div>
                   <Maximize2 className="text-white/50 w-4 h-4" />
                </div>
                <div>
                  <div className="h-px w-8 bg-gold mb-4 transition-all group-hover:w-full duration-700" />
                  <h3 className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.4em]">{img.title}</h3>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-obsidian/10 pt-12">
           <div className="flex gap-12 items-center overflow-x-auto w-full md:w-auto pb-4 md:pb-0">
             {images.map((_, i) => (
               <div key={i} className="flex flex-col gap-2 min-w-[60px]">
                 <span className={`text-[9px] font-mono ${i === active ? 'text-gold' : 'text-ash'}`}>
                   ASSET_0{i+1}
                 </span>
                 <div className={`h-[2px] transition-all duration-500 ${i === active ? 'w-full bg-gold' : 'w-4 bg-obsidian/10'}`} />
               </div>
             ))}
           </div>
           <div className="flex items-center gap-4 text-ash">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Verified Secure Repository // 2026</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(GalleryContent), {
  ssr: false,
  loading: () => <div className="h-[900px] w-full bg-neutral-900 animate-pulse" />
});
