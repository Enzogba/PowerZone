'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Marie L.',
      rating: 5,
      text: t('Excellent ! Salle propre, équipements récents et l\'accès 24h/24 est parfait pour mon emploi du temps. Je recommande vivement PowerZone !'),
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Thomas B.',
      rating: 5,
      text: t('Depuis que je me suis inscrit chez PowerZone, j\'ai retrouvé ma motivation. L\'espace est énorme et il y a toujours de la place !'),
      image: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Sophie M.',
      rating: 5,
      text: t('Rapport qualité-prix imbattable ! Pour moins de 30€, j\'ai accès à tout ce dont j\'ai besoin. Les équipements sont top.'),
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('Ce Que Disent Nos Membres')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de nos membres satisfaits
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <Quote className="h-16 w-16 text-red-600 opacity-20 mx-auto mb-8" />
              
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-light text-gray-800 mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <cite className="text-xl font-semibold text-gray-900 not-italic">
                    {testimonials[currentTestimonial].name}
                  </cite>
                  <p className="text-gray-600">Membre PowerZone</p>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex justify-center space-x-4 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <div className="flex space-x-2 items-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-red-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
              {t('Laisser un Avis')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}