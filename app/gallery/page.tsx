import Image from 'next/image';
import { galleryImages } from '@/data/content';

export const metadata = {
  title: 'Галерија | Тим Промет-ЕМ',
  description: 'Погледнете ја нашата галерија со слики од нашите производи, магацини и секојдневна работа.',
};

export default function GalleryPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-emerald-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Галерија</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Дел од нашата секојдневна работа, производи и магацински простор.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((img, index) => (
            <div key={index} className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-200 group">
              <Image
                src={img}
                alt={`Галерија слика ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
