import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'За нас | Тим Промет-ЕМ',
  description: 'Дознајте повеќе за Тим Промет-ЕМ, нашата историја, мисија и визија.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-emerald-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">За нас</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Запознајте се со Тим Промет-ЕМ, вашиот доверлив партнер во земјоделството.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Нашата Приказна</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Тим Промет-ЕМ е основана со јасна визија: да обезбеди најквалитетни земјоделски производи и репроматеријали за македонскиот пазар. Сместени во срцето на земјоделскиот регион, Струмица, ние сме длабоко поврзани со локалните производители и нивните потреби.
              </p>
              <p className="mb-4">
                Со текот на годините, прераснавме во доверлив партнер за многу земјоделци, фармери и трговци. Нашиот асортиман континуирано се проширува за да ги задоволи барањата на модерното земјоделство и сточарство.
              </p>
              <p>
                Денес, ние сме горди што нудиме широк спектар на производи, вклучувајќи свежо овошје и зеленчук, висококвалитетно брашно, балансирана сточна храна, концентрати и храна за домашни миленици.
              </p>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://picsum.photos/seed/about-history/800/1000"
              alt="Историја на Тим Промет-ЕМ"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Нашата Мисија</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Да обезбедиме континуиран пристап до висококвалитетни земјоделски производи и репроматеријали, поддржувајќи го развојот на локалното земјоделство и сточарство преку фер цени, стручни совети и навремена дистрибуција.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Нашата Визија</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Да бидеме водечка компанија во регионот за трговија со земјоделски производи, препознатлива по својот интегритет, иновативност и посветеност кон одржлив развој и долгорочни партнерства.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши Вредности</h2>
          <p className="text-lg text-gray-600">
            Принципите кои нè водат во секојдневното работење.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Квалитет', desc: 'Бескомпромисен стандард за сите наши производи.' },
            { title: 'Доверба', desc: 'Градиме долгорочни односи базирани на искреност.' },
            { title: 'Стручност', desc: 'Континуирано учење и споделување на знаењето.' },
            { title: 'Одговорност', desc: 'Грижа за заедницата и животната средина.' },
          ].map((value, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
