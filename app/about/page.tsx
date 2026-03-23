'use client';

import Image from 'next/image';
import { CheckCircle2, Leaf, Target, Eye, History } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutPage() {
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
            <span className="inline-flex items-center gap-2 text-emerald-300 text-xs font-semibold tracking-widest uppercase mb-4">
              <History className="h-3 w-3" />
              Нашата Приказна
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">За нас</h1>
            <p className="text-xl text-emerald-100/80 max-w-2xl mx-auto font-light leading-relaxed">
              Запознајте се со Тим Промет-ЕМ, вашиот доверлив партнер во земјоделството со децениско искуство.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-600" />
              <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest">Традиција и Квалитет</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">Нашата Приказна</h2>
            <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
              <p className="mb-6">
                Тим Промет-ЕМ е основана со јасна визија: да обезбеди најквалитетни земјоделски производи и репроматеријали за македонскиот пазар. Сместени во срцето на земјоделскиот регион, Струмица, ние сме длабоко поврзани со локалните производители и нивните потреби.
              </p>
              <p className="mb-6">
                Со текот на годините, прераснавме во доверлив партнер за многу земјоделци, фармери и трговци. Нашиот асортиман континуирано се проширува за да ги задоволи барањата на модерното земјоделство и сточарство.
              </p>
              <p>
                Денес, ние сме горди што нудиме широк спектар на производи, вклучувајќи свежо овошје и зеленчук, висококвалитетно брашно, балансирана сточна храна, концентрати и храна за домашни миленици.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl group"
          >
            <Image
              src="https://picsum.photos/seed/about-history/800/1000"
              alt="Историја на Тим Промет-ЕМ"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs">
              <p className="text-emerald-900 font-bold text-lg mb-1">Основана во Струмица</p>
              <p className="text-gray-500 text-sm">Повеќе од деценија искуство во земјоделскиот сектор.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-emerald-50/50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-emerald-100/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target className="h-24 w-24 text-emerald-900" />
              </div>
              <div className="h-12 w-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-8">
                <Target className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="text-3xl font-bold text-emerald-900 mb-6">Нашата Мисија</h3>
              <p className="text-gray-600 text-xl leading-relaxed font-light">
                Да обезбедиме континуиран пристап до висококвалитетни земјоделски производи и репроматеријали, поддржувајќи го развојот на локалното земјоделство и сточарство преку фер цени, стручни совети и навремена дистрибуција.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-emerald-900 p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Eye className="h-24 w-24 text-white" />
              </div>
              <div className="h-12 w-12 bg-emerald-800 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="h-6 w-6 text-emerald-300" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Нашата Визија</h3>
              <p className="text-emerald-100/80 text-xl leading-relaxed font-light">
                Да бидеме водечка компанија во регионот за трговија со земјоделски производи, препознатлива по својот интегритет, иновативност и посветеност кон одржлив развој и долгорочни партнерства.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-4">
            <Leaf className="h-4 w-4" />
            Нашите Принципи
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Наши Вредности</h2>
          <p className="text-xl text-gray-500 font-light">
            Принципите кои нè водат во секојдневното работење и соработка со нашите партнери.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { title: 'Квалитет', desc: 'Бескомпромисен стандард за сите наши производи.' },
            { title: 'Доверба', desc: 'Градиме долгорочни односи базирани на искреност.' },
            { title: 'Стручност', desc: 'Континуирано учење и споделување на знаењето.' },
            { title: 'Одговорност', desc: 'Грижа за заедницата и животната средина.' },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mx-auto w-20 h-20 bg-white border border-emerald-100 rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                <CheckCircle2 className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{value.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
