import Image from 'next/image';
import { productCategories } from '@/data/content';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Производи | Тим Промет-ЕМ',
  description: 'Широк асортиман на свежо овошје, зеленчук, брашно, сточна храна и земјоделски производи.',
};

export default function ProductsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-emerald-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Наши Производи</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Разгледајте го нашиот широк асортиман на производи, внимателно одбрани за да ги задоволат највисоките стандарди за квалитет.
          </p>
        </div>
      </div>

      {/* Products List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-24">
          {productCategories.map((category, index) => (
            <div 
              key={category.id} 
              id={category.id}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{category.name}</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {category.description}
                </p>
                <div className="prose prose-emerald text-gray-600 mb-8">
                  <p>
                    Нудиме највисок квалитет на {category.name.toLowerCase()} за вашите потреби. Нашите производи се внимателно селектирани од доверливи добавувачи и локални производители за да ви обезбедиме свежина и сигурност.
                  </p>
                  <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li>Врвен квалитет и свежина</li>
                    <li>Конкурентни цени</li>
                    <li>Достапност во различни количини</li>
                    <li>Брза и сигурна дистрибуција</li>
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm"
                >
                  Побарајте понуда
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
