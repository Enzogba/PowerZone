'use client';

import { useLanguage } from '@/lib/language-context';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Dumbbell, Users, Euro, Shield, Zap } from 'lucide-react';

export default function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Clock,
      title: t('Ouvert 24h/24'),
      description: t('Entraînez-vous quand vous voulez'),
      color: 'text-red-600'
    },
    {
      icon: Dumbbell,
      title: t('Équipements Modernes'),
      description: t('Matériel dernière génération'),
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: t('Espace Généreux'),
      description: t('2500m² pour vous entraîner'),
      color: 'text-green-600'
    },
    {
      icon: Euro,
      title: t('Tarifs Attractifs'),
      description: t('À partir de 29,99€/mois'),
      color: 'text-purple-600'
    },
    {
      icon: Shield,
      title: t('Sécurisé'),
      description: t('Badge d\'accès sécurisé'),
      color: 'text-orange-600'
    },
    {
      icon: Zap,
      title: t('Énergisant'),
      description: t('Ambiance motivante'),
      color: 'text-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('Pourquoi Choisir PowerZone ?')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez tous les avantages qui font de PowerZone Belfort le choix idéal pour votre remise en forme
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${feature.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}