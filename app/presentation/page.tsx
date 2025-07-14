'use client';

import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell, Heart, Target, Clock, Users, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PresentationPage() {
  const { t } = useLanguage();

  const zones = [
    {
      id: 'weights',
      title: t('Espace Poids Libre'),
      description: t('Zone dédiée aux exercices de musculation avec poids libres, haltères et barres olympiques.'),
      icon: Dumbbell,
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'cardio',
      title: t('Espace Cardio'),
      description: t('Équipements cardio dernière génération pour améliorer votre endurance et brûler les calories.'),
      icon: Heart,
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'crosstraining',
      title: t('Cross Training'),
      description: t('Espace fonctionnel pour les entraînements intensifs et variés avec matériel spécialisé.'),
      icon: Target,
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const features = [
    { icon: Clock, title: t('Ouvert 24h/24'), description: t('Accès libre à toute heure') },
    { icon: Users, title: t('2500m²'), description: t('Espace généreux et aéré') },
    { icon: Shield, title: t('Sécurisé'), description: t('Accès par badge personnel') }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('Découvrez PowerZone Belfort')}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            {t('2500m² dédiés à votre performance, ouverts 24h/24 pour s\'adapter à votre rythme de vie')}
          </p>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <feature.icon className="h-16 w-16 text-red-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Zones Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            {t('Nos Espaces d\'Entraînement')}
          </h2>
          
          <div className="space-y-16">
            {zones.map((zone, index) => (
              <div key={zone.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={zone.image}
                      alt={zone.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-4">
                    <zone.icon className="h-12 w-12 text-red-600" />
                    <h3 className="text-3xl font-bold">{zone.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {zone.description}
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-2">{t('Équipements disponibles')} :</h4>
                    <ul className="text-gray-600 space-y-1">
                      {zone.id === 'weights' && (
                        <>
                          <li>• {t('Haltères de 1kg à 50kg')}</li>
                          <li>• {t('Barres olympiques et disques')}</li>
                          <li>• {t('Bancs de musculation réglables')}</li>
                          <li>• {t('Racks de squat et développé')}</li>
                        </>
                      )}
                      {zone.id === 'cardio' && (
                        <>
                          <li>• {t('Tapis de course connectés')}</li>
                          <li>• {t('Vélos elliptiques')}</li>
                          <li>• {t('Rameurs Concept2')}</li>
                          <li>• {t('Vélos spinning')}</li>
                        </>
                      )}
                      {zone.id === 'crosstraining' && (
                        <>
                          <li>• {t('Box de CrossFit équipées')}</li>
                          <li>• {t('Kettlebells et medecine balls')}</li>
                          <li>• {t('Cordes à sauter et TRX')}</li>
                          <li>• {t('Espace fonctionnel 200m²')}</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            {t('Galerie Photos')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=600'
            ].map((src, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src={src}
                  alt={`PowerZone Belfort ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('Prêt à Commencer Votre Transformation ?')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('Rejoignez PowerZone Belfort dès aujourd\'hui')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tarifs">
              <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                {t('Voir les Tarifs')}
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                {t('Retour à l\'Accueil')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}