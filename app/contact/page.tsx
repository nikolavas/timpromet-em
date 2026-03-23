'use client';

import { useState } from 'react';
import { companyInfo } from '@/data/content';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Се појави грешка при испраќање на пораката.');
      }
      
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Се појави грешка. Ве молиме обидете се подоцна.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-emerald-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Контакт</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Имате прашање или сакате да соработуваме? Контактирајте нè преку формата подолу или посетете нè на нашата локација.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Контакт Информации</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-100 text-emerald-700">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Локација</h3>
                  <p className="text-gray-600 text-lg">{companyInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-100 text-emerald-700">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Телефон</h3>
                  <p className="text-gray-600 text-lg">{companyInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-100 text-emerald-700">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Е-маил</h3>
                  <p className="text-gray-600 text-lg">{companyInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-100 text-emerald-700">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Работно Време</h3>
                  <div className="text-gray-600 text-lg space-y-1">
                    <p>Пон-Пет: {companyInfo.workingHours.weekdays}</p>
                    <p>Сабота: {companyInfo.workingHours.saturday}</p>
                    <p>Недела: {companyInfo.workingHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-80 bg-gray-200 rounded-2xl overflow-hidden relative shadow-inner border border-gray-300">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.123456!2d22.633333!3d41.433333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDI2JzAwLjAiTiAyMsKwMzgnMDAuMCJF!5e0!3m2!1sen!2smk!4v1620000000000!5m2!1sen!2smk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Испратете порака</h2>
            
            {submitSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Send className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ви благодариме!</h3>
                <p>Вашата порака е успешно испратена. Ќе ве контактираме наскоро.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 text-sm">
                    {submitError}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Име и презиме
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors outline-none"
                    placeholder="Вашето име"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Е-маил адреса
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors outline-none"
                      placeholder="vasata@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Телефонски број
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors outline-none"
                      placeholder="07X XXX XXX"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Порака
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors outline-none resize-none"
                    placeholder="Како можеме да ви помогнеме?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center py-4 px-8 border border-transparent rounded-xl text-lg font-medium text-white bg-emerald-700 hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : 'shadow-md hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? 'Се испраќа...' : 'Испрати порака'}
                  {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
