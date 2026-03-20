import { services } from '@/data/content';
import { Truck, MessageSquareText, Handshake, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Услуги | Тим Промет-ЕМ',
  description: 'Нашите услуги вклучуваат дистрибуција, стручно советување и откуп на земјоделски производи.',
};

const iconMap = {
  Truck: Truck,
  MessageSquareText: MessageSquareText,
  Handshake: Handshake,
};

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-emerald-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Наши Услуги</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Покрај широкиот асортиман на производи, нудиме и професионални услуги за поддршка на вашиот бизнис.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || CheckCircle2;
            return (
              <div key={service.id} className="bg-gray-50 p-10 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-8">
                  <Icon className="h-10 w-10 text-emerald-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Service Info */}
        <div className="mt-24 bg-emerald-50 rounded-3xl p-8 md:p-16 border border-emerald-100">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-emerald-900 mb-6">Зошто да ги изберете нашите услуги?</h3>
            <p className="text-lg text-emerald-800 mb-10 leading-relaxed">
              Со повеќегодишно искуство во секторот, нашиот тим е посветен на обезбедување на брзи, ефикасни и сигурни решенија за вашите потреби. Ние не сме само добавувачи, туку ваши партнери во успехот.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {[
                'Навремена испорака',
                'Стручен тим со искуство',
                'Флексибилност и приспособливост',
                'Конкурентни услови',
                'Долгорочни партнерства',
                'Гарантиран квалитет'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-emerald-900 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
