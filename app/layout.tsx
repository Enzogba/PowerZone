import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/lib/language-context';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PowerZone Belfort - Salle de Sport 24h/24 | 2500m² de Pure Performance',
  description: 'Découvrez PowerZone Belfort, votre salle de sport moderne de 2500m² ouverte 24h/24. Espace poids libre, cardio et cross training. Inscription à partir de 29,99€/mois.',
  keywords: 'salle de sport, musculation, fitness, Belfort, 24h/24, poids libre, cardio, cross training',
  openGraph: {
    title: 'PowerZone Belfort - Salle de Sport 24h/24',
    description: 'Salle de sport moderne de 2500m² à Belfort. Ouvert 24h/24, équipements dernière génération.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <LanguageProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}