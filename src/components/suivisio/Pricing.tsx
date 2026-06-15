import { Check, ArrowRight, ChevronRight } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const plans = [
  {
    name: 'ESSENTIEL',
    price: '490',
    period: '€ HT/mois',
    engagement: 'Sans engagement',
    highlight: false,
    features: [
      'Conseil & expertise',
      'Accès plateforme digitale',
      '1 réunion de synthèse/mois',
      'Reporting simplifié',
    ],
    cta: 'Choisir Essentiel',
  },
  {
    name: 'CONFORT',
    price: '890',
    period: '€ HT/mois',
    engagement: 'Sans engagement',
    highlight: false,
    features: [
      'Conseil & expertise',
      'Accès plateforme digitale',
      '2 réunions de synthèse/mois',
      'Finance & reporting personnalisé',
      'Suivi réglementaire & conformité',
    ],
    cta: 'Choisir Confort',
  },
  {
    name: 'PREMIUM',
    price: '1 390',
    period: '€ HT/mois',
    engagement: 'Sans engagement',
    highlight: true,
    badge: 'Plus populaire',
    features: [
      'Conseil & expertise',
      'Accès plateforme digitale',
      '4 réunions de synthèse/mois',
      'Finance & reporting personnalisé',
      'Suivi réglementaire & conformité',
      'Pilotage de coordination de projet',
      'Accompagnement CEE',
    ],
    cta: 'Choisir Premium',
  },
  {
    name: 'EXPERT',
    price: 'SUR DEVIS',
    period: '',
    engagement: 'Sans engagement',
    highlight: false,
    features: [
      'Toutes les fonctions Premium',
      'Réponse aux appels d\'offres',
      'Consultation des entreprises',
      'Analyse comparative des offres',
      'Assistance à l\'attribution',
      'Gestion de projet externalisée',
      'Accompagnement AMO/Programme',
      'Accompagnement énergétique',
    ],
    cta: 'Nous contacter',
  },
];

export default function Pricing() {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <section id="tarifs" className="py-24 px-4 sm:px-6 bg-[#020B18] relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 100%, #0066CC 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="section-badge mb-6">
            <span>Nos Offres</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            TARIFS
            <span className="gradient-text"> TRANSPARENTS</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Des formules adaptées à chaque besoin, sans engagement de durée.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal ${isVisible ? 'visible' : ''} relative flex flex-col rounded-2xl overflow-hidden transition-all duration-500 ${
                plan.highlight ? 'scale-105 z-10' : ''
              }`}
              style={{
                transitionDelay: `${i * 120}ms`,
                background: plan.highlight
                  ? 'linear-gradient(160deg, #0A1E40 0%, #0A1628 100%)'
                  : '#0A1628',
                border: plan.highlight
                  ? '1px solid rgba(0,212,255,0.5)'
                  : '1px solid rgba(0,102,204,0.2)',
                boxShadow: plan.highlight
                  ? '0 0 60px rgba(0,102,204,0.25), 0 0 120px rgba(0,212,255,0.1)'
                  : 'none',
              }}
            >
              {/* Premium gradient top border */}
              {plan.highlight && (
                <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #0066CC, #00D4FF, #0066CC)' }} />
              )}

              <div className="p-6 flex flex-col flex-1">
                {/* Badge */}
                {plan.badge && (
                  <div className="mb-4">
                    <span className="popular-badge">{plan.badge}</span>
                  </div>
                )}

                {/* Plan name */}
                <h3 className={`font-display font-black text-sm tracking-[0.15em] mb-4 ${plan.highlight ? 'gradient-text' : 'text-slate-300'}`}>
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-2">
                  {plan.period ? (
                    <div className="flex items-baseline gap-1">
                      <span className="font-display font-black text-3xl sm:text-4xl text-white">
                        {plan.price}
                      </span>
                      <span className="text-slate-400 text-xs font-medium">{plan.period}</span>
                    </div>
                  ) : (
                    <div className="font-display font-black text-2xl sm:text-3xl gradient-text">
                      {plan.price}
                    </div>
                  )}
                </div>

                {/* Engagement */}
                <p className="text-slate-500 text-xs mb-6">{plan.engagement}</p>

                {/* Divider */}
                <div className="h-px bg-white/5 mb-6" />

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={14}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: plan.highlight ? '#00D4FF' : '#0066CC' }}
                      />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => {
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={plan.highlight ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'}
                >
                  {plan.cta}
                  {plan.highlight ? <ArrowRight size={16} /> : <ChevronRight size={16} />}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className={`text-center text-slate-500 text-sm mt-8 reveal ${isVisible ? 'visible' : ''} delay-600`}>
          Tous les tarifs sont exprimés hors taxes. TVA applicable selon la réglementation en vigueur.
        </p>
      </div>
    </section>
  );
}
