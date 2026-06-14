"use client";
import React from 'react';
import {
  motion
} from 'framer-motion';
import {
  Camera
} from 'lucide-react';
import NextImage from "next/image";

interface GalleryItem {
  id: number;
  src: string;
  type ? : 'hero' | 'normal' | 'wide' | 'standard';
}

const galleryData: GalleryItem[] = [{
  id: 1,
  src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/main.png',
  type: 'hero'
},
{
  id: 2,
  src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/2.jpg',
  type: 'standard'
},
{
  id: 3,
  src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/3.jpg',
  type: 'standard'
},
{
  id: 4,
  src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/4.jpg',
  type: 'standard'
},
{
  id: 5,
  src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/5.jpg',
  type: 'standard'
},
{
  id: 6,
  src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/6.png',
  type: 'normal'
},
{
  id: 7,
  src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/7.jpg',
  type: 'standard'
},
{
  id: 8,
  src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/8.png',
  type: 'standard'
},
{
  id: 9,
  src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/9.jpg',
  type: 'standard'
},
{
  id: 10,
  src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/10.png',
  type: 'wide'
},
{
  id: 11,
  src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/11.jpg',
  type: 'standard'
},
{
  id: 12,
  src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/12.jpg',
  type: 'standard'
},
{
  id: 13,
  src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/13.jpg',
  type: 'standard'
},
{
  id: 14,
  src: 'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/14.jpg',
  type: 'standard'
}, ];

export default function ExecutiveGallery() {
  const getSpan = (type ? : string) => {
    switch (type) {
      case 'hero':
        return 'col-span-2 md:col-span-3 row-span-2 md:row-span-3';
      case 'normal':
        return 'col-span-2 md:col-span-2 row-span-2 md:row-span-2';
      case 'wide':
        return 'col-span-2 md:col-span-3 row-span-1 md:row-span-2';
      default:
        return 'col-span-1 row-span-1';
    }
  };
  return (
    <section id="dmfgallery" className="bg-bone py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Gallery Header to match your Profile style */}
        <div className="">
          <div className="flex items-center gap-4 mb-12">
            <Camera className="text-gold w-4 h-4" />
            <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase">
              The CAO Gallery
            </span>
          </div>

          <h1 className="text-4xl font-light text-obsidian mb-2 tracking-tight">
            David Moro Fernandez
          </h1>
          <p className="text-[12px] uppercase tracking-[0.3em] text-gold/80 mb-8 font-medium">
            Chief Administrative Officer
          </p>

          <div className="space-y-6 text-lg font-light leading-relaxed mb-8 text-ash content-justify" lang="en">
            <p>
              As the Chief Administrative Officer, David Moro Fernandez
              stewards the institutional legacy and operational integrity
              of the organization. His leadership is defined by a commitment
              to structural clarity and the seamless integration of
              administrative strategy within the corporate landscape.
            </p>
            <p>
              This archive serves as a formal visual record of his tenure,
              capturing the precision, environment, and perspective that
              shape the modern institutional experience.
            </p>
          </div>
        </div>
        {/* The Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-[150px] md:auto-rows-[180px] grid-flow-dense gap-2 md:gap-1.5 overflow-hidden">
          {galleryData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={ { opacity: 0, scale: 0.95 }}
              whileInView={ { opacity: 1, scale: 1 }}
              transition={ { delay: idx * 0.05, duration: 0.5 }}
              className={`group relative overflow-hidden bg-obsidian/5 ${getSpan(item.type)}`}
              >
              {/* Image with hover scaling */}
              <NextImage
                src={item.src}
                alt={`Executive Archive ${item.id}`}
                className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110
                ${item.type === 'wide' ? 'object-top': 'object-center'}`}
                loading="lazy"
                />

              {/* Ref label appearing on hover */}
              <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-[10px] font-mono text-white tracking-[0.3em] uppercase">
                  Ref: {item.id.toString().padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}