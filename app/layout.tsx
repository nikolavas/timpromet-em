import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Тим Промет-ЕМ | Свежо овошје, зеленчук и земјоделски производи',
  description: 'Тим Промет-ЕМ е трговско друштво за свежо овошје и зеленчук, брашно, сточна храна, концентрати, храна за миленици и земјоделски производи во Струмица, Македонија.',
  openGraph: {
    title: 'Тим Промет-ЕМ | Свежо овошје, зеленчук и земјоделски производи',
    description: 'Тим Промет-ЕМ е трговско друштво за свежо овошје и зеленчук, брашно, сточна храна, концентрати, храна за миленици и земјоделски производи во Струмица, Македонија.',
    url: 'https://timpromet-em.mk',
    siteName: 'Тим Промет-ЕМ',
    locale: 'mk_MK',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="mk" className={`${inter.variable}`}>
      <body className="font-sans antialiased flex flex-col min-h-screen bg-gray-50 text-gray-900" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
