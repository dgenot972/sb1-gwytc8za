import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const plans = [
  {
    name: 'ESSENTIEL',
    price: '490',
    unit: '€ HT / mois',
    note: 'Sans engagement',
    highlight: false,
    color: '#0066CC',
    features: [
      'Conseil & expertise',
      'Accès plateforme digitale',
      '1 réunion de synthèse / mois',
      'Reporting simplifié',
    ],
  },
  {
    name: 'CONFORT',
    price: '890',
    unit: '€ HT / mois',
    note: 'Sans engagement',
    highlight: false,
    color: '#00D4FF',
    features: [
      'Conseil & expertise',
      'Accès plateforme digitale',
      '2 réunions de synthèse / mois',
      'Finance & reporting personnalisé',
      'Suivi réglementaire & conformité',
    ],
  },
  {
    name: 'PREMIUM',
    price: '1390',
    unit: '€ HT / mois',
    note: 'Sans engagement',
    highlight: true,
    color: '#F5A623',
    features: [
      'Conseil & expertise',
      'Accès plateforme digitale',
      '4 réunions de synthèse / mois',
      'Pilotage de coordination de projet',
      'Finance & reporting personnalisé',
      'Suivi réglementaire & conformité',
      'Accompagnement CEE',
    ],
  },
  {
    name: 'EXPERT',
    price: 'SUR DEVIS',
    unit: '',
    note: 'Sans engagement',
    highlight: false,
    color: '#a855f7',
    features: [
      'Toutes les prestations Premium',
      'Réponse aux appels d\'offres',
      'Consultation des entreprises',
      'Analyse comparative des offres',
      'Assistance à l\'attribution',
      'Gestion de projet externalisée',
      'Accompagnement AMO / Programme',
    ],
  },
];

export default function Pricing() {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <section id="tarifs" className="py-24 relative bg-[#040F20] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#020B18] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <span className="inline-block text-[#00D4FF] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Nos Forfaits Conseil
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            DES OFFRES
            <span className="gradient-text"> ADAPTÉES</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Choisissez la formule qui correspond à vos besoins. Toutes nos offres sont sans engagement.
          </p>
          <div className="section-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div
                className={`group relative h-full flex flex-col rounded-2xl p-6 overflow-hidden transition-all duration-300 ${
                  plan.highlight
                    ? 'gradient-border glow-blue scale-100 lg:scale-105 z-10'
                    : 'glass card-hover'
                }`}
                style={!plan.highlight ? { border: `1px solid ${plan.color}22` } : undefined}
              >
                {/* Popular badge */}
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r from-[#0066CC] to-[#00D4FF] text-white shadow-lg shadow-blue-500/40">
                      <Star size={11} className="fill-white" />
                      Plus populaire
                    </span>
                  </div>
                )}

                {/* Name */}
                <div className="mb-5">
                  <h3
                    className="font-display font-black text-lg tracking-widest mb-1"
                    style={{ color: plan.color }}
                  >
                    {plan.name}
                  </h3>
                  <div className="text-slate-500 text-xs uppercase tracking-wider">{plan.note}</div>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display font-black text-3xl sm:text-4xl text-white">
                      {plan.price}
                    </span>
                    {plan.unit && (
                      <span className="text-slate-400 text-sm font-medium">{plan.unit}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300 leading-snug">
                      <span
                        className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${plan.color}22` }}
                      >
                        <Check size={11} style={{ color: plan.color }} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`mt-auto inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                    plan.highlight
                      ? 'btn-primary'
                      : 'border border-[#0066CC]/40 text-slate-200 hover:bg-[#0066CC]/10 hover:border-[#00D4FF]/50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {plan.price === 'SUR DEVIS' ? 'Demander un devis' : 'Choisir cette offre'}
                    <ArrowRight size={14} />
                  </span>
                  {plan.highlight && <span className="shine" />}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className={`text-center text-slate-500 text-xs mt-10 reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '600ms' }}>
          * Tarifs indicatifs susceptibles d'évoluer selon le périmètre et la complexité des missions.
        </p>
      </div>
    </section>
  );
}
