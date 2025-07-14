'use client';

import { useLanguage } from '@/lib/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, Share2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  const { t } = useLanguage();

  const articles = [
    {
      id: 1,
      title: t('Les 5 Exercices Essentiels pour Débuter en Musculation'),
      excerpt: t('Découvrez les mouvements fondamentaux qui vous permettront de construire une base solide pour votre entraînement.'),
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Coach Mike',
      date: '15 Mars 2024',
      category: 'Musculation',
      readTime: '5 min'
    },
    {
      id: 2,
      title: t('Nutrition Sportive : Guide Complet pour Optimiser vos Performances'),
      excerpt: t('Apprenez à adapter votre alimentation à vos objectifs sportifs pour maximiser vos résultats.'),
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Nutritionniste Sarah',
      date: '12 Mars 2024',
      category: 'Nutrition',
      readTime: '8 min'
    },
    {
      id: 3,
      title: t('CrossFit vs Musculation Traditionnelle : Que Choisir ?'),
      excerpt: t('Analyse comparative des deux approches d\'entraînement pour vous aider à faire le bon choix.'),
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Coach Alex',
      date: '10 Mars 2024',
      category: 'Entraînement',
      readTime: '6 min'
    },
    {
      id: 4,
      title: t('Récupération Musculaire : Techniques et Conseils'),
      excerpt: t('L\'importance de la récupération dans votre progression et les meilleures techniques pour optimiser ce processus.'),
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Martin',
      date: '8 Mars 2024',
      category: 'Récupération',
      readTime: '7 min'
    },
    {
      id: 5,
      title: t('Entraînement Cardio : Maximiser vos Séances'),
      excerpt: t('Découvrez les différents types de cardio et comment les intégrer efficacement dans votre routine.'),
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Coach Emma',
      date: '5 Mars 2024',
      category: 'Cardio',
      readTime: '5 min'
    },
    {
      id: 6,
      title: t('Motivation et Objectifs : Rester Constant dans sa Pratique'),
      excerpt: t('Stratégies psychologiques pour maintenir votre motivation sur le long terme et atteindre vos objectifs.'),
      image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Coach Lisa',
      date: '3 Mars 2024',
      category: 'Motivation',
      readTime: '6 min'
    }
  ];

  const categories = ['Tous', 'Musculation', 'Nutrition', 'Entraînement', 'Récupération', 'Cardio', 'Motivation'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('Blog Fitness')}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            {t('Conseils d\'experts, programmes d\'entraînement et astuces nutrition pour optimiser vos performances')}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-red-600 hover:bg-red-700" : "hover:bg-red-50"}
              >
                {t(category)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{t('Article à la Une')}</h2>
            <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-80 lg:h-auto">
                  <Image
                    src={articles[0].image}
                    alt={articles[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                      {articles[0].category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {articles[0].date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {articles[0].author}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{articles[0].title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{articles[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <Button className="bg-red-600 hover:bg-red-700">
                      {t('Lire l\'Article')} <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      {t('Partager')}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">{t('Derniers Articles')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(1).map((article) => (
                <Card key={article.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.readTime} {t('de lecture')}</span>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        {t('Lire plus')} <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('Restez Informé')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('Recevez nos derniers articles, conseils d\'experts et programmes d\'entraînement directement dans votre boîte mail')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('Votre adresse email')}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button variant="secondary" className="bg-white text-red-600 hover:bg-gray-100 px-8">
              {t('S\'abonner')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}