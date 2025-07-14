'use client';

import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-white bg-opacity-20 rounded-full p-6">
              <Clock className="h-16 w-16" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {t('Horaires & Accès')}
          </h2>
          
          <h3 className="text-2xl md:text-3xl mb-8 opacity-90">
            {t('Votre Salle, Votre Rythme')}
          </h3>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            {t('Grâce à votre badge personnel, accédez à PowerZone quand vous le souhaitez, de jour comme de nuit')}
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-4">
                <Clock className="h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">{t('Accès 24h/24, 7j/7')}</h4>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-4">
                <div className="h-12 w-12 mx-auto mb-4 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{t('Sécurisé')}</h4>
                <p className="opacity-80">{t('Badge d\'accès sécurisé')}</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-4">
                <div className="h-12 w-12 mx-auto mb-4 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📹</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{t('Surveillé')}</h4>
                <p className="opacity-80">{t('Vidéosurveillance continue')}</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-4">
                <div className="h-12 w-12 mx-auto mb-4 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{t('Équipe Présente')}</h4>
                <p className="opacity-80">{t('Staff disponible aux heures de pointe')}</p>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">{t('Comment ça marche ?')}</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold mb-2">Inscrivez-vous</h4>
                  <p className="opacity-80">Créez votre compte en ligne</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold mb-2">Récupérez votre badge</h4>
                  <p className="opacity-80">Venez chercher votre badge d'accès</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold mb-2">Entraînez-vous librement</h4>
                  <p className="opacity-80">Accès 24h/24 avec votre badge</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/inscription">
              <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                {t('S\'inscrire Maintenant')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-6 text-lg font-semibold">
                {t('Nous Contacter')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}