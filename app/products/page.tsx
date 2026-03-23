'use client';

import Image from 'next/image';
import { productCategories } from '@/data/content';
import { ArrowRight, Leaf } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function ProductsPage() {
  return (
    <div className="bg-[#fcfcf9] min-h-screen">
      {/* Page Header */}
      <div className="bg-emerald-900 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Наши Производи</h1>
            <p className="text-xl text-emerald-100/80 max-w-2xl mx-auto font-light leading-relaxed">
              Разгледајте го нашиот широк асортиман на производи, внимателно одбрани за да ги задоволат највисоките стандарди за квалитет.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="space-y-32">
          {productCategories.map((category, index) => (
            <motion.div 
              key={category.id} 
              id={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Brand Overlay */}
                  <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Brand Mark */}
                  <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Leaf className="h-6 w-6 text-emerald-400" />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-emerald-600" />
                  <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest">Категорија</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">{category.name}</h2>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                  {category.description}
                </p>
                <div className="prose prose-emerald text-gray-600 mb-10">
                  <p className="text-lg">
                    Нудиме највисок квалитет на {category.name.toLowerCase()} за вашите потреби. Нашите производи се внимателно селектирани од доверливи добавувачи и локални производители за да ви обезбедиме свежина и сигурност.
                  </p>
                  <ul className="list-none pl-0 mt-8 space-y-4">
                    {[
                      'Врвен квалитет и свежина',
                      'Конкурентни цени',
                      'Достапност во различни количини',
                      'Брза и сигурна дистрибуција'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-emerald-700 hover:bg-emerald-800 transition-all shadow-lg hover:shadow-emerald-900/20 hover:-translate-y-1"
                >
                  Побарајте понуда
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
