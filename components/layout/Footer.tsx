import Link from 'next/link';
import { companyInfo, navigation } from '@/data/content';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Logo className="h-10 w-auto" variant="light" />
            </Link>
            <p className="text-emerald-200 text-sm leading-relaxed">
              Вашиот доверлив партнер за свежо овошје, зеленчук, брашно, сточна храна и земјоделски производи. Квалитет на кој можете да се потпрете.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Брзи Линкови</h4>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-emerald-200 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Контакт</h4>
            <ul className="space-y-4 text-sm text-emerald-200">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span>{companyInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span>{companyInfo.email}</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Работно Време</h4>
            <ul className="space-y-4 text-sm text-emerald-200">
              <li className="flex justify-between border-b border-emerald-800 pb-2">
                <span>Понеделник - Петок</span>
                <span className="font-medium text-white">{companyInfo.workingHours.weekdays}</span>
              </li>
              <li className="flex justify-between border-b border-emerald-800 pb-2">
                <span>Сабота</span>
                <span className="font-medium text-white">{companyInfo.workingHours.saturday}</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Недела</span>
                <span className="font-medium text-white">{companyInfo.workingHours.sunday}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-emerald-900 text-center text-sm text-emerald-400">
          <p>&copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> {companyInfo.name}. Сите права се задржани.</p>
        </div>
      </div>
    </footer>
  );
}
