'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Check } from 'lucide-react';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('Adresse'),
      content: '123 Avenue de la République\n90000 Belfort',
      link: 'https://maps.google.com/?q=Belfort+France'
    },
    {
      icon: Phone,
      title: t('Téléphone'),
      content: '+33 3 84 XX XX XX',
      link: 'tel:+33384xxxxxx'
    },
    {
      icon: Mail,
      title: t('Email'),
      content: 'contact@powerzone-belfort.fr',
      link: 'mailto:contact@powerzone-belfort.fr'
    },
    {
      icon: Clock,
      title: t('Horaires d\'accueil'),
      content: 'Lun-Ven: 9h-18h\nSam: 10h-16h\nDim: Fermé',
      link: null
    }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">{t('Message Envoyé !')}</h2>
            <p className="text-gray-600 mb-6">
              {t('Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.')}
            </p>
            <Button 
              onClick={() => setSubmitted(false)}
              className="bg-red-600 hover:bg-red-700"
            >
              {t('Envoyer un Autre Message')}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('Contactez-nous')}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            {t('Une question ? Un conseil ? Notre équipe est là pour vous accompagner')}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-2xl">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-2xl text-center">
                  {t('Envoyez-nous un Message')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">{t('Prénom')} *</Label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">{t('Nom')} *</Label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">{t('Email')} *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">{t('Message')} *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="mt-1"
                      placeholder={t('Décrivez votre demande...')}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 py-6 text-lg"
                    disabled={loading}
                  >
                    {loading ? t('Envoi en cours...') : t('Envoyer le Message')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <info.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                      <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-gray-600 hover:text-red-600 transition-colors whitespace-pre-line"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Google Maps */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-80 bg-gray-200 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21776.02825345!2d6.8443806!3d47.6380836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479251c3c9e95f4b%3A0x40a5fb99a3b5840!2sBelfort%2C%20France!5e0!3m2!1sen!2sus!4v1635789234567!5m2!1sen!2sus"
                      width="100%"
                      height="320"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="PowerZone Belfort Location"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Quick FAQ */}
              <Card className="border-red-200 shadow-lg">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-xl text-red-600">
                    {t('Questions Fréquentes')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold mb-1">{t('Puis-je visiter avant de m\'inscrire ?')}</h4>
                      <p className="text-gray-600 text-sm">{t('Bien sûr ! Contactez-nous pour planifier une visite gratuite.')}</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{t('Comment récupérer mon badge d\'accès ?')}</h4>
                      <p className="text-gray-600 text-sm">{t('Après inscription, vous pourrez récupérer votre badge durant nos heures d\'accueil.')}</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{t('Y a-t-il un coach disponible ?')}</h4>
                      <p className="text-gray-600 text-sm">{t('Un coach est présent aux heures de pointe pour vous accompagner.')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Hours Notice */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('Salle Ouverte 24h/24')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('Même si nos horaires d\'accueil sont limités, votre salle vous attend à toute heure avec votre badge personnel')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
              {t('Découvrir nos Tarifs')}
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              {t('Planifier une Visite')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}