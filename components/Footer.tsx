'use client';

import { useLanguage } from '@/lib/language-context';
import { Dumbbell, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '/', label: t('Accueil') },
    { href: '/presentation', label: t('Présentation') },
    { href: '/tarifs', label: t('Tarifs') },
    { href: '/contact', label: t('Contact') },
  ];

  const services = [
    t('Poids Libre'),
    t('Cardio'),
    t('Cross Training'),
    t('Coaching Personnel'),
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold">PowerZone Belfort</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('Votre salle de sport moderne à Belfort')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('Liens Rapides')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('Services')}</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('Contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>123 Avenue de la République</p>
                  <p>90000 Belfort</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-gray-400">+33 3 84 XX XX XX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-gray-400">contact@powerzone-belfort.fr</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2024 PowerZone Belfort. {t('Tous droits réservés')}.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                {t('Mentions Légales')}
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                {t('Politique de Confidentialité')}
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                {t('CGV')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}