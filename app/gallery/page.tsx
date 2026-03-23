'use client';

import Image from 'next/image';
import { galleryImages } from '@/data/content';
import { motion } from 'motion/react';
import { Maximize2, Leaf } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="bg-[#fcfcf9] min-h-screen">
      {/* Page Header */}
      <div className="bg-emerald-900 py-20 md:py-32 relative overflow-hidden">
        {/* Subtle texture or pattern could go here */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-emerald-300 text-xs font-semibold tracking-widest uppercase mb-4">
              <Leaf className="h-3 w-3" />
              Тим Промет-ЕМ
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Галерија <span className="text-emerald-400">.</span>
            </h1>
            <p className="text-xl text-emerald-100/80 max-w-2xl mx-auto font-light leading-relaxed">
              Визуелно патување низ нашиот свет на свежина, квалитет и посветеност кон земјоделството.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gallery Bento Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {galleryImages.map((img, index) => {
            // Define different sizes for bento effect
            const spans = [
              'md:col-span-2 md:row-span-2', // Large
              'md:col-span-1 md:row-span-1', // Small
              'md:col-span-1 md:row-span-2', // Tall
              'md:col-span-2 md:row-span-1', // Wide
              'md:col-span-1 md:row-span-1', // Small
              'md:col-span-1 md:row-span-1', // Small
              'md:col-span-1 md:row-span-1', // Small
              'md:col-span-1 md:row-span-1', // Small
            ];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group bg-gray-100 ${spans[index % spans.length]}`}
              >
                <Image
                  src={img.url}
                  alt={img.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Brand Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-emerald-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-2 block">
                      {img.category}
                    </span>
                    <h3 className="text-white text-2xl font-bold mb-2">
                      {img.title}
                    </h3>
                    <div className="h-0.5 w-12 bg-emerald-500 mb-4" />
                    <button className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                      <Maximize2 className="h-4 w-4" />
                      Прегледај
                    </button>
                  </div>
                </div>

                {/* Subtle Brand Mark (Top Right) */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2">
                    <Leaf className="h-4 w-4 text-emerald-400" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-1 rounded-full bg-emerald-50 border border-emerald-100">
            <div className="px-6 py-3 rounded-full bg-white shadow-sm flex items-center gap-4">
              <span className="text-sm text-gray-500">Сакате да видите повеќе?</span>
              <a href="/contact" className="text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors">
                Контактирајте нè
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
