import Image from 'next/image';
import { news } from '@/data/content';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Новости | Тим Промет-ЕМ',
  description: 'Најнови вести, соопштенија и информации од Тим Промет-ЕМ.',
};

export default function NewsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-emerald-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Новости</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Следете ги најновите вести, соопштенија и информации од нашата компанија.
          </p>
        </div>
      </div>

      {/* News List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {news.map((item) => (
            <article key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-emerald-600 mb-4 font-medium">
                  <Calendar className="h-4 w-4 mr-2" />
                  <time dateTime={item.date}>
                    {new Date(item.date).toLocaleDateString('mk-MK', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-emerald-700 transition-colors">
                  <Link href={`/news#${item.id}`}>{item.title}</Link>
                </h2>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {item.summary}
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/news#${item.id}`}
                    className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800 transition-colors"
                  >
                    Прочитај повеќе
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
