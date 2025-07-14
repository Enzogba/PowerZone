'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Shield, Check, Clock, Dumbbell } from 'lucide-react';

export default function InscriptionPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
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

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">{t('Inscription Réussie !')}</h2>
            <p className="text-gray-600 mb-6">
              {t('Votre compte a été créé avec succès. Vous recevrez un email de confirmation sous peu avec votre badge d\'accès.')}
            </p>
            <Button 
              onClick={() => window.location.href = '/'}
              className="bg-red-600 hover:bg-red-700"
            >
              {t('Retour à l\'Accueil')}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('Rejoignez PowerZone')}
          </h1>
          <p className="text-xl opacity-90">
            {t('Créez votre compte et commencez votre transformation')}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="shadow-2xl">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-2xl text-center">
                  {t('Formulaire d\'Inscription')}
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
                    <Label htmlFor="phone">{t('Téléphone')} *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="password">{t('Mot de passe')} *</Label>
                      <Input
                        id="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">{t('Confirmer le mot de passe')} *</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        required
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => handleInputChange('acceptTerms', checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      {t('J\'accepte les')} <a href="#" className="text-red-600 hover:underline">{t('Conditions Générales de Vente')}</a> {t('et la')} <a href="#" className="text-red-600 hover:underline">{t('Politique de Confidentialité')}</a>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 py-6 text-lg"
                    disabled={!formData.acceptTerms || loading}
                  >
                    {loading ? t('Création en cours...') : t('Créer mon Compte')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-8">
              <Card className="border-red-200 shadow-lg">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-xl flex items-center">
                    <Shield className="h-6 w-6 text-red-600 mr-2" />
                    {t('Votre Abonnement')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-lg">
                      <span>{t('Abonnement mensuel')}</span>
                      <span className="font-bold">29,99€</span>
                    </div>
                    <div className="flex justify-between items-center text-lg">
                      <span>{t('Frais d\'inscription')}</span>
                      <span className="font-bold">30€</span>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>{t('Total première mensualité')}</span>
                      <span>59,99€</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{t('Ce qui vous attend')}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-red-600" />
                      <span>{t('Accès 24h/24, 7j/7')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Dumbbell className="h-5 w-5 text-red-600" />
                      <span>{t('2500m² d\'équipements modernes')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-red-600" />
                      <span>{t('Badge d\'accès personnalisé')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-red-600" />
                      <span>{t('Vestiaires et douches')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-red-600" />
                      <span>{t('Parking gratuit')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-red-600" />
                      <span>{t('WiFi haut débit')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{t('Besoin d\'aide ?')}</h3>
                <p className="mb-4">{t('Notre équipe est là pour vous accompagner')}</p>
                <Button variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                  {t('Nous Contacter')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}