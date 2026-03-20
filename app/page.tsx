import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail } from 'lucide-react';
import { companyInfo, productCategories, services, galleryImages } from '@/data/content';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/agriculture-hero/1920/1080"
            alt="Agriculture field"
            fill
            className="object-cover opacity-30"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Квалитетни земјоделски производи за вашиот успех
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-10 max-w-2xl leading-relaxed">
              Тим Промет-ЕМ е вашиот доверлив партнер за свежо овошје, зеленчук, брашно, сточна храна и земјоделски репроматеријали.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-emerald-900 bg-white hover:bg-gray-50 transition-colors"
              >
                Наши производи
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center items-center px-8 py-4 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-emerald-900 transition-colors"
              >
                Контактирајте нè
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">За Тим Промет-ЕМ</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Со долгогодишно искуство во трговијата со земјоделски производи, ние сме посветени на обезбедување на највисок квалитет за нашите клиенти. Нашата мисија е да ги поврземе локалните производители со пазарот, нудејќи свежи и здрави производи.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Покрај свежото овошје и зеленчук, нудиме широк асортиман на брашно, сточна храна, концентрати и храна за миленици, задоволувајќи ги сите ваши потреби на едно место.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800 transition-colors"
              >
                Дознајте повеќе за нас
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://picsum.photos/seed/about-company/800/800"
                alt="Тим Промет-ЕМ магацин"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши Производи</h2>
            <p className="text-lg text-gray-600">
              Разгледајте го нашиот широк асортиман на производи, внимателно одбрани за да ги задоволат највисоките стандарди за квалитет.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.slice(0, 6).map((category) => (
              <Link key={category.id} href={`/products#${category.id}`} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {category.description}
                    </p>
                    <div className="flex items-center text-emerald-700 font-medium text-sm mt-auto">
                      Види повеќе <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex justify-center items-center px-6 py-3 border border-emerald-700 text-base font-medium rounded-md text-emerald-700 bg-transparent hover:bg-emerald-50 transition-colors"
            >
              Сите производи
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Зошто да нè изберете нас?</h2>
            <p className="text-lg text-emerald-100">
              Нашата посветеност кон квалитетот и задоволството на клиентите нè прави лидер во регионот.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-emerald-800/50 p-8 rounded-2xl border border-emerald-700/50">
              <div className="w-12 h-12 bg-emerald-700 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Врвен квалитет</h3>
              <p className="text-emerald-100">
                Внимателно ги избираме нашите добавувачи и производи за да гарантираме највисок квалитет за нашите клиенти.
              </p>
            </div>
            <div className="bg-emerald-800/50 p-8 rounded-2xl border border-emerald-700/50">
              <div className="w-12 h-12 bg-emerald-700 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Широк асортиман</h3>
              <p className="text-emerald-100">
                Нудиме сè што ви е потребно на едно место - од свежо овошје до сточна храна и земјоделски репроматеријали.
              </p>
            </div>
            <div className="bg-emerald-800/50 p-8 rounded-2xl border border-emerald-700/50">
              <div className="w-12 h-12 bg-emerald-700 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Професионална услуга</h3>
              <p className="text-emerald-100">
                Нашиот стручен тим е секогаш тука да ви помогне со совети и брза услуга при секое ваше барање.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Галерија</h2>
              <p className="text-gray-600">Дел од нашата секојдневна работа и производи.</p>
            </div>
            <Link
              href="/gallery"
              className="hidden sm:inline-flex items-center text-emerald-700 font-medium hover:text-emerald-800 transition-colors"
            >
              Види ја целата галерија
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.slice(0, 4).map((img, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={img}
                  alt={`Галерија слика ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/gallery"
              className="inline-flex items-center text-emerald-700 font-medium hover:text-emerald-800 transition-colors"
            >
              Види ја целата галерија
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Контактирајте нè</h2>
              <p className="text-lg text-gray-600 mb-8">
                Имате прашање или сакате да соработуваме? Посетете нè на нашата локација или контактирајте нè преку телефон или е-маил.
              </p>
              
              <div className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-100 text-emerald-700">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Локација</h3>
                    <p className="mt-1 text-gray-600">{companyInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-100 text-emerald-700">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Телефон</h3>
                    <p className="mt-1 text-gray-600">{companyInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-100 text-emerald-700">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Е-маил</h3>
                    <p className="mt-1 text-gray-600">{companyInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] lg:h-auto min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden relative shadow-inner border border-gray-300">
              {/* Google Maps Placeholder - In a real app, use @vis.gl/react-google-maps */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Google Maps Интеграција</p>
                  <p className="text-gray-400 text-sm mt-2">Локација: {companyInfo.address}</p>
                </div>
              </div>
              {/* Fallback iframe for immediate visual result without API key */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.123456!2d22.633333!3d41.433333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDI2JzAwLjAiTiAyMsKwMzgnMDAuMCJF!5e0!3m2!1sen!2smk!4v1620000000000!5m2!1sen!2smk" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0, zIndex: 10 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-50 hover:opacity-100 transition-opacity duration-300"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Подготвени за соработка?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Контактирајте нè денес за да добиете понуда за нашите производи или да договориме средба.
          </p>
          <Link
            href="/contact"
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-emerald-900 bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all"
          >
            Побарајте понуда
          </Link>
        </div>
      </section>
    </>
  );
}
