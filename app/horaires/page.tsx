'use client';

import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Shield, Camera, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HorairesPage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Clock,
      title: t('Accès 24h/24, 7j/7'),
      description: t('Votre salle vous attend à toute heure, même les weekends et jours fériés'),
      color: 'text-red-600'
    },
    {
      icon: Shield,
      title: t('Sécurisé'),
      description: t('Badge d\'accès sécurisé et système d\'alarme connecté'),
      color: 'text-blue-600'
    },
    {
      icon: Camera,
      title: t('Surveillé'),
      description: t('Vidéosurveillance continue pour votre sécurité'),
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: t('Équipe Présente'),
      description: t('Staff disponible aux heures de pointe pour vous accompagner'),
      color: 'text-purple-600'
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Inscription en ligne',
      description: 'Créez votre compte sur notre site web'
    },
    {
      number: 2,
      title: 'Récupération du badge',
      description: 'Venez récupérer votre badge durant nos heures d\'accueil'
    },
    {
      number: 3,
      title: 'Accès libre',
      description: 'Entraînez-vous quand vous voulez avec votre badge'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('Horaires & Accès')}
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 opacity-90">
            {t('Votre Salle, Votre Rythme')}
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            {t('Grâce à votre badge personnel, accédez à PowerZone quand vous le souhaitez, de jour comme de nuit')}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${feature.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              {t('Comment ça marche ?')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Reception Hours */}
            <Card className="border-red-200 shadow-lg">
              <CardHeader className="bg-red-50 text-center">
                <CardTitle className="text-2xl text-red-600">
                  {t('Horaires d\'accueil')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-4">Semaine</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Lundi - Vendredi</span>
                        <span className="font-semibold">9h00 - 18h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Samedi</span>
                        <span className="font-semibold">10h00 - 16h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dimanche</span>
                        <span className="font-semibold">Fermé</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4">Services durant l'accueil</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <span>Remise des badges d'accès</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <span>Informations et conseils</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <span>Support technique</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <span>Visites de la salle</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t('Questions Fréquentes')}
            </h2>
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {t('Que faire si j\'oublie mon badge ?')}
                  </h3>
                  <p className="text-gray-600">
                    Contactez-nous durant nos heures d'accueil ou utilisez notre numéro d'urgence pour obtenir un accès temporaire.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    La salle est-elle vraiment ouverte la nuit ?
                  </h3>
                  <p className="text-gray-600">
                    Oui ! Votre badge fonctionne 24h/24, 7j/7. La salle est sécurisée et surveillée en permanence.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Y a-t-il du personnel la nuit ?
                  </h3>
                  <p className="text-gray-600">
                    Pas de personnel physique, mais la salle est sous surveillance vidéo 24h/24 et équipée d'un système d'alarme.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Puis-je venir avec un invité ?
                  </h3>
                  <p className="text-gray-600">
                    Les invités sont autorisés durant les heures d'accueil avec staff présent. Tarif spécial invité disponible.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('Salle Ouverte 24h/24')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('Même si nos horaires d\'accueil sont limités, votre salle vous attend à toute heure avec votre badge personnel')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tarifs">
              <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                {t('Découvrir nos Tarifs')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                {t('Planifier une Visite')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}