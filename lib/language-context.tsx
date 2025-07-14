'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'Accueil': 'Accueil',
    'Présentation': 'Présentation',
    'Horaires': 'Horaires',
    'Tarifs': 'Tarifs',
    'Blog': 'Blog',
    'Contact': 'Contact',
    'S\'inscrire': 'S\'inscrire',
    
    // Hero Section
    'POWERZONE BELFORT': 'POWERZONE BELFORT',
    'Votre Salle de Sport 24h/24': 'Votre Salle de Sport 24h/24',
    '2500m² de Pure Performance': '2500m² de Pure Performance',
    'Découvrez notre salle de sport moderne équipée des dernières technologies. Espace poids libre, cardio et cross training dans un environnement motivant et sécurisé.': 'Découvrez notre salle de sport moderne équipée des dernières technologies. Espace poids libre, cardio et cross training dans un environnement motivant et sécurisé.',
    'Découvrir la Salle': 'Découvrir la Salle',
    'Voir les Tarifs': 'Voir les Tarifs',
    
    // Features
    'Pourquoi Choisir PowerZone ?': 'Pourquoi Choisir PowerZone ?',
    'Ouvert 24h/24': 'Ouvert 24h/24',
    'Entraînez-vous quand vous voulez': 'Entraînez-vous quand vous voulez',
    'Équipements Modernes': 'Équipements Modernes',
    'Matériel dernière génération': 'Matériel dernière génération',
    'Espace Généreux': 'Espace Généreux',
    '2500m² pour vous entraîner': '2500m² pour vous entraîner',
    'Tarifs Attractifs': 'Tarifs Attractifs',
    'À partir de 29,99€/mois': 'À partir de 29,99€/mois',
    
    // Presentation Page
    'Découvrez PowerZone Belfort': 'Découvrez PowerZone Belfort',
    '2500m² dédiés à votre performance, ouverts 24h/24 pour s\'adapter à votre rythme de vie': '2500m² dédiés à votre performance, ouverts 24h/24 pour s\'adapter à votre rythme de vie',
    'Accès libre à toute heure': 'Accès libre à toute heure',
    'Espace généreux et aéré': 'Espace généreux et aéré',
    'Accès par badge personnel': 'Accès par badge personnel',
    'Nos Espaces d\'Entraînement': 'Nos Espaces d\'Entraînement',
    'Espace Poids Libre': 'Espace Poids Libre',
    'Zone dédiée aux exercices de musculation avec poids libres, haltères et barres olympiques.': 'Zone dédiée aux exercices de musculation avec poids libres, haltères et barres olympiques.',
    'Espace Cardio': 'Espace Cardio',
    'Équipements cardio dernière génération pour améliorer votre endurance et brûler les calories.': 'Équipements cardio dernière génération pour améliorer votre endurance et brûler les calories.',
    'Cross Training': 'Cross Training',
    'Espace fonctionnel pour les entraînements intensifs et variés avec matériel spécialisé.': 'Espace fonctionnel pour les entraînements intensifs et variés avec matériel spécialisé.',
    
    // Common elements
    'Prêt à Commencer Votre Transformation ?': 'Prêt à Commencer Votre Transformation ?',
    'Rejoignez PowerZone Belfort dès aujourd\'hui': 'Rejoignez PowerZone Belfort dès aujourd\'hui',
    'Retour à l\'Accueil': 'Retour à l\'Accueil',
    'Nous Contacter': 'Nous Contacter',
    
    // Equipment lists
    'Équipements disponibles': 'Équipements disponibles',
    'Haltères de 1kg à 50kg': 'Haltères de 1kg à 50kg',
    'Barres olympiques et disques': 'Barres olympiques et disques',
    'Bancs de musculation réglables': 'Bancs de musculation réglables',
    'Racks de squat et développé': 'Racks de squat et développé',
    'Tapis de course connectés': 'Tapis de course connectés',
    'Vélos elliptiques': 'Vélos elliptiques',
    'Rameurs Concept2': 'Rameurs Concept2',
    'Vélos spinning': 'Vélos spinning',
    'Box de CrossFit équipées': 'Box de CrossFit équipées',
    'Kettlebells et medecine balls': 'Kettlebells et medecine balls',
    'Cordes à sauter et TRX': 'Cordes à sauter et TRX',
    'Espace fonctionnel 200m²': 'Espace fonctionnel 200m²',
    
    // Gallery
    'Galerie Photos': 'Galerie Photos',
    
    // Pricing
    'Nos Tarifs': 'Nos Tarifs',
    'Des prix transparents pour un accès illimité à votre performance': 'Des prix transparents pour un accès illimité à votre performance',
    'OFFRE POPULAIRE': 'OFFRE POPULAIRE',
    'Abonnement Mensuel': 'Abonnement Mensuel',
    'Accès illimité à tous nos équipements': 'Accès illimité à tous nos équipements',
    'S\'inscrire Maintenant': 'S\'inscrire Maintenant',
    'Frais d\'inscription': 'Frais d\'inscription',
    'Frais uniques lors de votre première inscription, incluant votre badge d\'accès personnalisé.': 'Frais uniques lors de votre première inscription, incluant votre badge d\'accès personnalisé.',
    'Engagement': 'Engagement',
    'Engagement d\'un an pour votre première inscription. Ensuite, vous pourrez choisir un abonnement sans engagement.': 'Engagement d\'un an pour votre première inscription. Ensuite, vous pourrez choisir un abonnement sans engagement.',
    
    // FAQ
    'Questions Fréquentes': 'Questions Fréquentes',
    'Comment fonctionne l\'accès 24h/24 ?': 'Comment fonctionne l\'accès 24h/24 ?',
    'Votre badge personnel vous donne accès à la salle à toute heure, même les weekends et jours fériés. La salle est sécurisée et surveillée.': 'Votre badge personnel vous donne accès à la salle à toute heure, même les weekends et jours fériés. La salle est sécurisée et surveillée.',
    'Puis-je suspendre mon abonnement ?': 'Puis-je suspendre mon abonnement ?',
    'Après votre première année, vous pouvez suspendre votre abonnement pour des raisons médicales ou de voyage prolongé.': 'Après votre première année, vous pouvez suspendre votre abonnement pour des raisons médicales ou de voyage prolongé.',
    'Y a-t-il des frais cachés ?': 'Y a-t-il des frais cachés ?',
    'Aucun frais caché ! Le prix affiché inclut l\'accès à tous les équipements, vestiaires, douches et parking.': 'Aucun frais caché ! Le prix affiché inclut l\'accès à tous les équipements, vestiaires, douches et parking.',
    'Prêt à Rejoindre PowerZone ?': 'Prêt à Rejoindre PowerZone ?',
    'Commencez votre transformation dès aujourd\'hui': 'Commencez votre transformation dès aujourd\'hui',
    
    // Contact
    'Contactez-nous': 'Contactez-nous',
    'Une question ? Un conseil ? Notre équipe est là pour vous accompagner': 'Une question ? Un conseil ? Notre équipe est là pour vous accompagner',
    'Envoyez-nous un Message': 'Envoyez-nous un Message',
    'Prénom': 'Prénom',
    'Nom': 'Nom',
    'Email': 'Email',
    'Message': 'Message',
    'Décrivez votre demande...': 'Décrivez votre demande...',
    'Envoyer le Message': 'Envoyer le Message',
    'Envoi en cours...': 'Envoi en cours...',
    'Message Envoyé !': 'Message Envoyé !',
    'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.': 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.',
    'Envoyer un Autre Message': 'Envoyer un Autre Message',
    'Adresse': 'Adresse',
    'Téléphone': 'Téléphone',
    'Horaires d\'accueil': 'Horaires d\'accueil',
    
    // Blog
    'Blog Fitness': 'Blog Fitness',
    'Conseils d\'experts, programmes d\'entraînement et astuces nutrition pour optimiser vos performances': 'Conseils d\'experts, programmes d\'entraînement et astuces nutrition pour optimiser vos performances',
    'Tous': 'Tous',
    'Musculation': 'Musculation',
    'Nutrition': 'Nutrition',
    'Entraînement': 'Entraînement',
    'Récupération': 'Récupération',
    'Cardio': 'Cardio',
    'Motivation': 'Motivation',
    'Article à la Une': 'Article à la Une',
    'Lire l\'Article': 'Lire l\'Article',
    'Partager': 'Partager',
    'Derniers Articles': 'Derniers Articles',
    'de lecture': 'de lecture',
    'Lire plus': 'Lire plus',
    
    // Newsletter
    'Restez Informé': 'Restez Informé',
    'Recevez nos derniers articles, conseils d\'experts et programmes d\'entraînement directement dans votre boîte mail': 'Recevez nos derniers articles, conseils d\'experts et programmes d\'entraînement directement dans votre boîte mail',
    'Votre adresse email': 'Votre adresse email',
    'S\'abonner': 'S\'abonner',
    
    // Registration
    'Rejoignez PowerZone': 'Rejoignez PowerZone',
    'Créez votre compte et commencez votre transformation': 'Créez votre compte et commencez votre transformation',
    'Formulaire d\'Inscription': 'Formulaire d\'Inscription',
    'Mot de passe': 'Mot de passe',
    'Confirmer le mot de passe': 'Confirmer le mot de passe',
    'J\'accepte les': 'J\'accepte les',
    'Conditions Générales de Vente': 'Conditions Générales de Vente',
    'et la': 'et la',
    'Politique de Confidentialité': 'Politique de Confidentialité',
    'Créer mon Compte': 'Créer mon Compte',
    'Création en cours...': 'Création en cours...',
    'Inscription Réussie !': 'Inscription Réussie !',
    'Votre compte a été créé avec succès. Vous recevrez un email de confirmation sous peu avec votre badge d\'accès.': 'Votre compte a été créé avec succès. Vous recevrez un email de confirmation sous peu avec votre badge d\'accès.',
    'Votre Abonnement': 'Votre Abonnement',
    'Abonnement mensuel': 'Abonnement mensuel',
    'Total première mensualité': 'Total première mensualité',
    'Ce qui vous attend': 'Ce qui vous attend',
    'Badge d\'accès personnalisé': 'Badge d\'accès personnalisé',
    'Vestiaires et douches': 'Vestiaires et douches',
    'Parking gratuit': 'Parking gratuit',
    'WiFi haut débit': 'WiFi haut débit',
    'Besoin d\'aide ?': 'Besoin d\'aide ?',
    'Notre équipe est là pour vous accompagner': 'Notre équipe est là pour vous accompagner',
    
    // Testimonials
    'Ce Que Disent Nos Membres': 'Ce Que Disent Nos Membres',
    'Excellent ! Salle propre, équipements récents et l\'accès 24h/24 est parfait pour mon emploi du temps. Je recommande vivement PowerZone !': 'Excellent ! Salle propre, équipements récents et l\'accès 24h/24 est parfait pour mon emploi du temps. Je recommande vivement PowerZone !',
    'Depuis que je me suis inscrit chez PowerZone, j\'ai retrouvé ma motivation. L\'espace est énorme et il y a toujours de la place !': 'Depuis que je me suis inscrit chez PowerZone, j\'ai retrouvé ma motivation. L\'espace est énorme et il y a toujours de la place !',
    'Rapport qualité-prix imbattable ! Pour moins de 30€, j\'ai accès à tout ce dont j\'ai besoin. Les équipements sont top.': 'Rapport qualité-prix imbattable ! Pour moins de 30€, j\'ai accès à tout ce dont j\'ai besoin. Les équipements sont top.',
    'Laisser un Avis': 'Laisser un Avis',
    
    // Hours
    'Horaires & Accès': 'Horaires & Accès',
    'Votre Salle, Votre Rythme': 'Votre Salle, Votre Rythme',
    'Grâce à votre badge personnel, accédez à PowerZone quand vous le souhaitez, de jour comme de nuit': 'Grâce à votre badge personnel, accédez à PowerZone quand vous le souhaitez, de jour comme de nuit',
    'Accès 24h/24, 7j/7': 'Accès 24h/24, 7j/7',
    'Sécurisé': 'Sécurisé',
    'Badge d\'accès sécurisé': 'Badge d\'accès sécurisé',
    'Surveillé': 'Surveillé',
    'Vidéosurveillance continue': 'Vidéosurveillance continue',
    'Équipe Présente': 'Équipe Présente',
    'Staff disponible aux heures de pointe': 'Staff disponible aux heures de pointe',
    'Comment ça marche ?': 'Comment ça marche ?',
    'Salle Ouverte 24h/24': 'Salle Ouverte 24h/24',
    'Même si nos horaires d\'accueil sont limités, votre salle vous attend à toute heure avec votre badge personnel': 'Même si nos horaires d\'accueil sont limités, votre salle vous attend à toute heure avec votre badge personnel',
    'Découvrir nos Tarifs': 'Découvrir nos Tarifs',
    'Planifier une Visite': 'Planifier une Visite',
    
    // Footer
    'Votre salle de sport moderne à Belfort': 'Votre salle de sport moderne à Belfort',
    'Liens Rapides': 'Liens Rapides',
    'Services': 'Services',
    'Poids Libre': 'Poids Libre',
    'Coaching Personnel': 'Coaching Personnel',
    'Suivez-nous': 'Suivez-nous',
    'Tous droits réservés': 'Tous droits réservés',
    'Mentions Légales': 'Mentions Légales',
    'Politique de Confidentialité': 'Politique de Confidentialité',
    'CGV': 'CGV',
    
    // Contact FAQ
    'Puis-je visiter avant de m\'inscrire ?': 'Puis-je visiter avant de m\'inscrire ?',
    'Bien sûr ! Contactez-nous pour planifier une visite gratuite.': 'Bien sûr ! Contactez-nous pour planifier une visite gratuite.',
    'Comment récupérer mon badge d\'accès ?': 'Comment récupérer mon badge d\'accès ?',
    'Après inscription, vous pourrez récupérer votre badge durant nos heures d\'accueil.': 'Après inscription, vous pourrez récupérer votre badge durant nos heures d\'accueil.',
    'Y a-t-il un coach disponible ?': 'Y a-t-il un coach disponible ?',
    'Un coach est présent aux heures de pointe pour vous accompagner.': 'Un coach est présent aux heures de pointe pour vous accompagner.',
    
    // Blog Articles
    'Les 5 Exercices Essentiels pour Débuter en Musculation': 'Les 5 Exercices Essentiels pour Débuter en Musculation',
    'Découvrez les mouvements fondamentaux qui vous permettront de construire une base solide pour votre entraînement.': 'Découvrez les mouvements fondamentaux qui vous permettront de construire une base solide pour votre entraînement.',
    'Nutrition Sportive : Guide Complet pour Optimiser vos Performances': 'Nutrition Sportive : Guide Complet pour Optimiser vos Performances',
    'Apprenez à adapter votre alimentation à vos objectifs sportifs pour maximiser vos résultats.': 'Apprenez à adapter votre alimentation à vos objectifs sportifs pour maximiser vos résultats.',
    'CrossFit vs Musculation Traditionnelle : Que Choisir ?': 'CrossFit vs Musculation Traditionnelle : Que Choisir ?',
    'Analyse comparative des deux approches d\'entraînement pour vous aider à faire le bon choix.': 'Analyse comparative des deux approches d\'entraînement pour vous aider à faire le bon choix.',
    'Récupération Musculaire : Techniques et Conseils': 'Récupération Musculaire : Techniques et Conseils',
    'L\'importance de la récupération dans votre progression et les meilleures techniques pour optimiser ce processus.': 'L\'importance de la récupération dans votre progression et les meilleures techniques pour optimiser ce processus.',
    'Entraînement Cardio : Maximiser vos Séances': 'Entraînement Cardio : Maximiser vos Séances',
    'Découvrez les différents types de cardio et comment les intégrer efficacement dans votre routine.': 'Découvrez les différents types de cardio et comment les intégrer efficacement dans votre routine.',
    'Motivation et Objectifs : Rester Constant dans sa Pratique': 'Motivation et Objectifs : Rester Constant dans sa Pratique',
    'Stratégies psychologiques pour maintenir votre motivation sur le long terme et atteindre vos objectifs.': 'Stratégies psychologiques pour maintenir votre motivation sur le long terme et atteindre vos objectifs.',
  },
  en: {
    // Navigation
    'Accueil': 'Home',
    'Présentation': 'About',
    'Horaires': 'Hours',
    'Tarifs': 'Pricing',
    'Blog': 'Blog',
    'Contact': 'Contact',
    'S\'inscrire': 'Sign Up',
    
    // Hero Section
    'POWERZONE BELFORT': 'POWERZONE BELFORT',
    'Votre Salle de Sport 24h/24': 'Your 24/7 Fitness Center',
    '2500m² de Pure Performance': '2500m² of Pure Performance',
    'Découvrez notre salle de sport moderne équipée des dernières technologies. Espace poids libre, cardio et cross training dans un environnement motivant et sécurisé.': 'Discover our modern fitness center equipped with the latest technologies. Free weights, cardio and cross training areas in a motivating and secure environment.',
    'Découvrir la Salle': 'Discover the Gym',
    'Voir les Tarifs': 'View Pricing',
    
    // Features
    'Pourquoi Choisir PowerZone ?': 'Why Choose PowerZone?',
    'Ouvert 24h/24': 'Open 24/7',
    'Entraînez-vous quand vous voulez': 'Train whenever you want',
    'Équipements Modernes': 'Modern Equipment',
    'Matériel dernière génération': 'Latest generation equipment',
    'Espace Généreux': 'Spacious Area',
    '2500m² pour vous entraîner': '2500m² to train',
    'Tarifs Attractifs': 'Attractive Rates',
    'À partir de 29,99€/mois': 'From €29.99/month',
    
    // Presentation Page
    'Découvrez PowerZone Belfort': 'Discover PowerZone Belfort',
    '2500m² dédiés à votre performance, ouverts 24h/24 pour s\'adapter à votre rythme de vie': '2500m² dedicated to your performance, open 24/7 to adapt to your lifestyle',
    'Accès libre à toute heure': 'Free access at any time',
    'Espace généreux et aéré': 'Spacious and airy space',
    'Accès par badge personnel': 'Access by personal badge',
    'Nos Espaces d\'Entraînement': 'Our Training Areas',
    'Espace Poids Libre': 'Free Weights Area',
    'Zone dédiée aux exercices de musculation avec poids libres, haltères et barres olympiques.': 'Area dedicated to strength training with free weights, dumbbells and Olympic bars.',
    'Espace Cardio': 'Cardio Area',
    'Équipements cardio dernière génération pour améliorer votre endurance et brûler les calories.': 'Latest generation cardio equipment to improve your endurance and burn calories.',
    'Cross Training': 'Cross Training',
    'Espace fonctionnel pour les entraînements intensifs et variés avec matériel spécialisé.': 'Functional space for intensive and varied workouts with specialized equipment.',
    
    // Common elements
    'Prêt à Commencer Votre Transformation ?': 'Ready to Start Your Transformation?',
    'Rejoignez PowerZone Belfort dès aujourd\'hui': 'Join PowerZone Belfort today',
    'Retour à l\'Accueil': 'Back to Home',
    'Nous Contacter': 'Contact Us',
    
    // Equipment lists
    'Équipements disponibles': 'Available Equipment',
    'Haltères de 1kg à 50kg': 'Dumbbells from 1kg to 50kg',
    'Barres olympiques et disques': 'Olympic bars and plates',
    'Bancs de musculation réglables': 'Adjustable weight benches',
    'Racks de squat et développé': 'Squat and bench press racks',
    'Tapis de course connectés': 'Connected treadmills',
    'Vélos elliptiques': 'Elliptical bikes',
    'Rameurs Concept2': 'Concept2 rowing machines',
    'Vélos spinning': 'Spinning bikes',
    'Box de CrossFit équipées': 'Equipped CrossFit boxes',
    'Kettlebells et medecine balls': 'Kettlebells and medicine balls',
    'Cordes à sauter et TRX': 'Jump ropes and TRX',
    'Espace fonctionnel 200m²': '200m² functional space',
    
    // Gallery
    'Galerie Photos': 'Photo Gallery',
    
    // Pricing
    'Nos Tarifs': 'Our Pricing',
    'Des prix transparents pour un accès illimité à votre performance': 'Transparent prices for unlimited access to your performance',
    'OFFRE POPULAIRE': 'POPULAR OFFER',
    'Abonnement Mensuel': 'Monthly Membership',
    'Accès illimité à tous nos équipements': 'Unlimited access to all our equipment',
    'S\'inscrire Maintenant': 'Sign Up Now',
    'Frais d\'inscription': 'Registration Fee',
    'Frais uniques lors de votre première inscription, incluant votre badge d\'accès personnalisé.': 'One-time fee for your first registration, including your personalized access badge.',
    'Engagement': 'Commitment',
    'Engagement d\'un an pour votre première inscription. Ensuite, vous pourrez choisir un abonnement sans engagement.': 'One-year commitment for your first registration. Then you can choose a membership without commitment.',
    
    // FAQ
    'Questions Fréquentes': 'Frequently Asked Questions',
    'Comment fonctionne l\'accès 24h/24 ?': 'How does 24/7 access work?',
    'Votre badge personnel vous donne accès à la salle à toute heure, même les weekends et jours fériés. La salle est sécurisée et surveillée.': 'Your personal badge gives you access to the gym at any time, even on weekends and holidays. The gym is secured and monitored.',
    'Puis-je suspendre mon abonnement ?': 'Can I suspend my membership?',
    'Après votre première année, vous pouvez suspendre votre abonnement pour des raisons médicales ou de voyage prolongé.': 'After your first year, you can suspend your membership for medical reasons or extended travel.',
    'Y a-t-il des frais cachés ?': 'Are there any hidden fees?',
    'Aucun frais caché ! Le prix affiché inclut l\'accès à tous les équipements, vestiaires, douches et parking.': 'No hidden fees! The displayed price includes access to all equipment, locker rooms, showers and parking.',
    'Prêt à Rejoindre PowerZone ?': 'Ready to Join PowerZone?',
    'Commencez votre transformation dès aujourd\'hui': 'Start your transformation today',
    
    // Contact
    'Contactez-nous': 'Contact Us',
    'Une question ? Un conseil ? Notre équipe est là pour vous accompagner': 'A question? Advice? Our team is here to help you',
    'Envoyez-nous un Message': 'Send Us a Message',
    'Prénom': 'First Name',
    'Nom': 'Last Name',
    'Email': 'Email',
    'Message': 'Message',
    'Décrivez votre demande...': 'Describe your request...',
    'Envoyer le Message': 'Send Message',
    'Envoi en cours...': 'Sending...',
    'Message Envoyé !': 'Message Sent!',
    'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.': 'Your message has been sent successfully. We will respond as soon as possible.',
    'Envoyer un Autre Message': 'Send Another Message',
    'Adresse': 'Address',
    'Téléphone': 'Phone',
    'Horaires d\'accueil': 'Reception Hours',
    
    // Blog
    'Blog Fitness': 'Fitness Blog',
    'Conseils d\'experts, programmes d\'entraînement et astuces nutrition pour optimiser vos performances': 'Expert advice, training programs and nutrition tips to optimize your performance',
    'Tous': 'All',
    'Musculation': 'Strength Training',
    'Nutrition': 'Nutrition',
    'Entraînement': 'Training',
    'Récupération': 'Recovery',
    'Cardio': 'Cardio',
    'Motivation': 'Motivation',
    'Article à la Une': 'Featured Article',
    'Lire l\'Article': 'Read Article',
    'Partager': 'Share',
    'Derniers Articles': 'Latest Articles',
    'de lecture': 'read',
    'Lire plus': 'Read more',
    
    // Newsletter
    'Restez Informé': 'Stay Informed',
    'Recevez nos derniers articles, conseils d\'experts et programmes d\'entraînement directement dans votre boîte mail': 'Receive our latest articles, expert advice and training programs directly in your mailbox',
    'Votre adresse email': 'Your email address',
    'S\'abonner': 'Subscribe',
    
    // Registration
    'Rejoignez PowerZone': 'Join PowerZone',
    'Créez votre compte et commencez votre transformation': 'Create your account and start your transformation',
    'Formulaire d\'Inscription': 'Registration Form',
    'Mot de passe': 'Password',
    'Confirmer le mot de passe': 'Confirm Password',
    'J\'accepte les': 'I accept the',
    'Conditions Générales de Vente': 'Terms and Conditions',
    'et la': 'and the',
    'Politique de Confidentialité': 'Privacy Policy',
    'Créer mon Compte': 'Create My Account',
    'Création en cours...': 'Creating...',
    'Inscription Réussie !': 'Registration Successful!',
    'Votre compte a été créé avec succès. Vous recevrez un email de confirmation sous peu avec votre badge d\'accès.': 'Your account has been created successfully. You will receive a confirmation email shortly with your access badge.',
    'Votre Abonnement': 'Your Membership',
    'Abonnement mensuel': 'Monthly membership',
    'Total première mensualité': 'Total first monthly payment',
    'Ce qui vous attend': 'What awaits you',
    'Badge d\'accès personnalisé': 'Personalized access badge',
    'Vestiaires et douches': 'Locker rooms and showers',
    'Parking gratuit': 'Free parking',
    'WiFi haut débit': 'High-speed WiFi',
    'Besoin d\'aide ?': 'Need help?',
    'Notre équipe est là pour vous accompagner': 'Our team is here to help you',
    
    // Testimonials
    'Ce Que Disent Nos Membres': 'What Our Members Say',
    'Excellent ! Salle propre, équipements récents et l\'accès 24h/24 est parfait pour mon emploi du temps. Je recommande vivement PowerZone !': 'Excellent! Clean gym, recent equipment and 24/7 access is perfect for my schedule. I highly recommend PowerZone!',
    'Depuis que je me suis inscrit chez PowerZone, j\'ai retrouvé ma motivation. L\'espace est énorme et il y a toujours de la place !': 'Since I signed up at PowerZone, I found my motivation again. The space is huge and there\'s always room!',
    'Rapport qualité-prix imbattable ! Pour moins de 30€, j\'ai accès à tout ce dont j\'ai besoin. Les équipements sont top.': 'Unbeatable value for money! For less than €30, I have access to everything I need. The equipment is top-notch.',
    'Laisser un Avis': 'Leave a Review',
    
    // Hours
    'Horaires & Accès': 'Hours & Access',
    'Votre Salle, Votre Rythme': 'Your Gym, Your Rhythm',
    'Grâce à votre badge personnel, accédez à PowerZone quand vous le souhaitez, de jour comme de nuit': 'Thanks to your personal badge, access PowerZone whenever you want, day or night',
    'Accès 24h/24, 7j/7': '24/7 Access',
    'Sécurisé': 'Secure',
    'Badge d\'accès sécurisé': 'Secure access badge',
    'Surveillé': 'Monitored',
    'Vidéosurveillance continue': 'Continuous video surveillance',
    'Équipe Présente': 'Staff Present',
    'Staff disponible aux heures de pointe': 'Staff available during peak hours',
    'Comment ça marche ?': 'How does it work?',
    'Salle Ouverte 24h/24': 'Gym Open 24/7',
    'Même si nos horaires d\'accueil sont limités, votre salle vous attend à toute heure avec votre badge personnel': 'Even if our reception hours are limited, your gym awaits you at any time with your personal badge',
    'Découvrir nos Tarifs': 'Discover Our Pricing',
    'Planifier une Visite': 'Schedule a Visit',
    
    // Footer
    'Votre salle de sport moderne à Belfort': 'Your modern fitness center in Belfort',
    'Liens Rapides': 'Quick Links',
    'Services': 'Services',
    'Poids Libre': 'Free Weights',
    'Coaching Personnel': 'Personal Training',
    'Suivez-nous': 'Follow Us',
    'Tous droits réservés': 'All rights reserved',
    'Mentions Légales': 'Legal Notice',
    'Politique de Confidentialité': 'Privacy Policy',
    'CGV': 'Terms',
    
    // Contact FAQ
    'Puis-je visiter avant de m\'inscrire ?': 'Can I visit before signing up?',
    'Bien sûr ! Contactez-nous pour planifier une visite gratuite.': 'Of course! Contact us to schedule a free visit.',
    'Comment récupérer mon badge d\'accès ?': 'How do I get my access badge?',
    'Après inscription, vous pourrez récupérer votre badge durant nos heures d\'accueil.': 'After registration, you can pick up your badge during our reception hours.',
    'Y a-t-il un coach disponible ?': 'Is there a coach available?',
    'Un coach est présent aux heures de pointe pour vous accompagner.': 'A coach is present during peak hours to help you.',
    
    // Blog Articles
    'Les 5 Exercices Essentiels pour Débuter en Musculation': '5 Essential Exercises to Start Weight Training',
    'Découvrez les mouvements fondamentaux qui vous permettront de construire une base solide pour votre entraînement.': 'Discover the fundamental movements that will allow you to build a solid foundation for your training.',
    'Nutrition Sportive : Guide Complet pour Optimiser vos Performances': 'Sports Nutrition: Complete Guide to Optimize Your Performance',
    'Apprenez à adapter votre alimentation à vos objectifs sportifs pour maximiser vos résultats.': 'Learn to adapt your diet to your sports goals to maximize your results.',
    'CrossFit vs Musculation Traditionnelle : Que Choisir ?': 'CrossFit vs Traditional Weight Training: What to Choose?',
    'Analyse comparative des deux approches d\'entraînement pour vous aider à faire le bon choix.': 'Comparative analysis of two training approaches to help you make the right choice.',
    'Récupération Musculaire : Techniques et Conseils': 'Muscle Recovery: Techniques and Tips',
    'L\'importance de la récupération dans votre progression et les meilleures techniques pour optimiser ce processus.': 'The importance of recovery in your progress and the best techniques to optimize this process.',
    'Entraînement Cardio : Maximiser vos Séances': 'Cardio Training: Maximize Your Sessions',
    'Découvrez les différents types de cardio et comment les intégrer efficacement dans votre routine.': 'Discover the different types of cardio and how to integrate them effectively into your routine.',
    'Motivation et Objectifs : Rester Constant dans sa Pratique': 'Motivation and Goals: Staying Consistent in Your Practice',
    'Stratégies psychologiques pour maintenir votre motivation sur le long terme et atteindre vos objectifs.': 'Psychological strategies to maintain your motivation in the long term and achieve your goals.',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};