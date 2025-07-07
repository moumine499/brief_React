import type { ReactNode } from 'react';

import {
  Clock,
  CreditCard,
  Map,
  Smartphone,
  ShieldCheck,
  Users,

} from 'lucide-react';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface Stat {
  label: string;
  value: string;
}

const features: Feature[] = [
  {
    icon: <Clock className="w-6 h-6 text-cyan-700" />,
    title: 'Gain de temps',
    description: 'Réservez en quelques clics depuis votre téléphone, sans file d’attente.',
  },
  {
    icon: <Map className="w-6 h-6 text-cyan-700" />,
    title: 'Large couverture',
    description: 'Accédez à de nombreuses destinations à travers tout le pays.',
  },
  {
    icon: <CreditCard className="w-6 h-6 text-cyan-700" />,
    title: 'Paiement sécurisé',
    description: 'Payez facilement via mobile money, carte bancaire ou espèces.',
  },
  {
    icon: <Smartphone className="w-6 h-6 text-cyan-700" />,
    title: 'Application mobile',
    description: 'Une app rapide et intuitive pour gérer vos trajets à tout moment.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-cyan-700" />,
    title: 'Sécurité garantie',
    description: 'Données protégées, billets vérifiés, voyages assurés.',
  },
  {
    icon: <Users className="w-6 h-6 text-cyan-700" />,
    title: 'Support client',
    description: 'Une équipe disponible 7j/7 pour répondre à vos questions.',
  },
];

const stats: Stat[] = [
  { label: 'Utilisateurs actifs', value: '12,500+' },
  { label: 'Billets réservés', value: '85,000+' },
  { label: 'Destinations', value: '120+' },
  { label: 'Avis positifs', value: '4.9/5' },
];

function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Titre */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nos fonctionnalités</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Découvrez comment SAFAR rend vos voyages plus simples, plus rapides et plus sûrs.
          </p>
        </div>

        {/* Grille des fonctionnalités */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Statistiques */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
