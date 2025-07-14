'use client';

import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Clock, Users, Shield, Dumbbell } from 'lucide-react';
import Link from 'next/link';

export default function TarifsPage() {
  const { t } = useLanguage();

  const features = [
    { icon: Clock, text: t('Accès 24h/24, 7j/7') },
    { icon: Dumbbell, text: t('Tous les équipements inclus') },
    { icon: Users, text: t('Espace de 2500m²') },
    { icon: Shield, text: t('Accès sécurisé par badge') },
    { text: t('Vestiaires et douches') },
    { text: t('WiFi gratuit') },
    { text: t('Parking gratuit') },
    { text: t('Suivi personnalisé disponible') }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('Nos Tarifs')}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            {t('Des prix transparents pour un accès illimité à votre performance')}
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Offer */}
            <Card className="relative border-4 border-red-600 shadow-2xl mb-12 overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-6 py-2 rounded-bl-lg">
                <Star className="h-4 w-4 inline mr-1" />
                {t('OFFRE POPULAIRE')}
              </div>
              <CardHeader className="text-center bg-gradient-to-r from-red-50 to-red-100 pb-8">
                <CardTitle className="text-4xl font-bold text-red-600 mb-4">
                  {t('Abonnement Mensuel')}
                </CardTitle>
                <div className="text-6xl font-bold text-gray-900 mb-2">
                  29,99€
                  <span className="text-2xl text-gray-600 font-normal">/mois</span>
                </div>
                <p className="text-lg text-gray-600">
                  {t('Accès illimité à tous nos équipements')}
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {feature.icon ? (
                        <feature.icon className="h-5 w-5 text-red-600" />
                      ) : (
                        <Check className="h-5 w-5 text-red-600" />
                      )}
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <Link href="/inscription">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl">
                      {t('S\'inscrire Maintenant')}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-600">
                    {t('Frais d\'inscription')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-4">30€</div>
                  <p className="text-gray-600">
                    {t('Frais uniques lors de votre première inscription, incluant votre badge d\'accès personnalisé.')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-600">
                    {t('Engagement')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-4">1 an</div>
                  <p className="text-gray-600">
                    {t('Engagement d\'un an pour votre première inscription. Ensuite, vous pourrez choisir un abonnement sans engagement.')}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-12">
                {t('Questions Fréquentes')}
              </h2>
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {t('Comment fonctionne l\'accès 24h/24 ?')}
                    </h3>
                    <p className="text-gray-600">
                      {t('Votre badge personnel vous donne accès à la salle à toute heure, même les weekends et jours fériés. La salle est sécurisée et surveillée.')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {t('Puis-je suspendre mon abonnement ?')}
                    </h3>
                    <p className="text-gray-600">
                      {t('Après votre première année, vous pouvez suspendre votre abonnement pour des raisons médicales ou de voyage prolongé.')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {t('Y a-t-il des frais cachés ?')}
                    </h3>
                    <p className="text-gray-600">
                      {t('Aucun frais caché ! Le prix affiché inclut l\'accès à tous les équipements, vestiaires, douches et parking.')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('Prêt à Rejoindre PowerZone ?')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('Commencez votre transformation dès aujourd\'hui')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inscription">
              <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                {t('S\'inscrire Maintenant')}
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                {t('Nous Contacter')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}