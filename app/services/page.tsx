'use client';

import { services } from '@/data/content';
import { Truck, MessageSquareText, Handshake, CheckCircle2, Leaf, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const iconMap = {
  Truck: Truck,
  MessageSquareText: MessageSquareText,
  Handshake: Handshake,
};

export default function ServicesPage() {
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
              <Sparkles className="h-3 w-3" />
              Професионална Поддршка
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Наши Услуги</h1>
            <p className="text-xl text-emerald-100/80 max-w-2xl mx-auto font-light leading-relaxed">
              Покрај широкиот асортиман на производи, нудиме и професионални услуги за поддршка на вашиот бизнис и земјоделско производство.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || CheckCircle2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-emerald-100/50 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="mx-auto w-24 h-24 bg-emerald-50 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-emerald-100 transition-colors duration-500">
                  <Icon className="h-12 w-12 text-emerald-700" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">{service.title}</h2>
                <p className="text-gray-500 text-lg leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Service Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 bg-emerald-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Leaf className="h-64 w-64 text-white" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Зошто да ги изберете нашите услуги?</h3>
            <p className="text-xl text-emerald-100/80 mb-16 leading-relaxed font-light">
              Со повеќегодишно искуство во секторот, нашиот тим е посветен на обезбедување на брзи, ефикасни и сигурни решенија за вашите потреби. Ние не сме само добавувачи, туку ваши партнери во успехот.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {[
                'Навремена испорака',
                'Стручен тим со искуство',
                'Флексибилност и приспособливост',
                'Конкурентни услови',
                'Долгорочни партнерства',
                'Гарантиран квалитет'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  </div>
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
