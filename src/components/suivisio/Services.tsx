import React from 'react';
import { Layers, FileText, Recycle, Settings, Zap, Award } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const expertises = [
  {
    icon: Layers,
    title: 'ASSISTANCE À MAÎTRISE D\'OUVRAGE',
    color: '#0066CC',
    features: [
      'Pilotage et coordination de projet',
      'Appui à la décision',
      'Suivi opérationnel et reporting',
    ],
  },
  {
    icon: FileText,
    title: 'MARCHÉS & COMMANDE PUBLIQUE',
    color: '#00D4FF',
    features: [
      'Réponse aux appels d\'offres',
      'Consultation des fournisseurs',
      'Analyse comparative des offres',
      'Assistance à l\'attribution',
      'Rédaction de cahiers des charges',
    ],
  },
  {
    icon: Recycle,
    title: 'LOI AGEC & RÉEMPLOI',
    color: '#22c55e',
    features: [
      'Diagnostic REMD',
      'Tri 3 flux',
      'Réemploi & valorisation',
      'Écoconseils à demande',
    ],
  },
  {
    icon: Settings,
    title: 'MAINTENANCE & EXPLOITATION',
    color: '#F5A623',
    features: [
      'Gestion des prestataires',
      'Suivi des interventions',
      'Contrôle de maintenance',
      'Reporting qualité',
    ],
  },
  {
    icon: Zap,
    title: 'PERFORMANCE ÉNERGÉTIQUE',
    color: '#a855f7',
    features: [
      'Audit énergétique',
      'Optimisation des consommations',
      'Suivi & reporting',
    ],
  },
  {
    icon: Award,
    title: 'ACCOMPAGNEMENT CEE',
    color: '#ec4899',
    features: [
      'Obtention des Certificats d\'Économies d\'Énergie',
      'Identification des aides',
      'Optimisation financière',
    ],
  },
];

export default function Services() {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <section id="expertises" className="py-24 relative" style={{ background: 'linear-gradient(180deg, #020B18 0%, #040F20 50%, #020B18 100%)' }}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <span className="inline-block text-[#00D4FF] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Nos Expertises
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            6 DOMAINES D'
            <span className="gradient-text"> EXPERTISE</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Une couverture complète des besoins en conseil opérationnel pour les acteurs publics et privés.
          </p>
          <div className="section-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertises.map((exp, i) => {
            const Icon = exp.icon;
            const delay = i * 100;
            return (
              <div
                key={exp.title}
                className={`gradient-border card-hover rounded-xl p-6 cursor-default reveal ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `linear-gradient(135deg, ${exp.color}22, ${exp.color}44)`,
                    border: `1px solid ${exp.color}44`,
                  }}
                >
                  <Icon size={22} style={{ color: exp.color }} />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-sm tracking-wider text-white mb-4 leading-tight">
                  {exp.title}
                </h3>

                {/* Features */}
                <ul className="space-y-2">
                  {exp.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-slate-400 text-sm leading-snug">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: exp.color }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
