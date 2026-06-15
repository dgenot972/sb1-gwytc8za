import { ArrowRight } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const steps = [
  { number: '01', title: 'ANALYSE DU BESOIN' },
  { number: '02', title: 'RÉDACTION DU CAHIER DES CHARGES' },
  { number: '03', title: 'CONSULTATION DES ENTREPRISES' },
  { number: '04', title: 'ANALYSE TECHNIQUE & FINANCIÈRE DES OFFRES' },
  { number: '05', title: 'ASSISTANCE AU CHOIX DES PRESTATAIRES' },
  { number: '06', title: 'ACCOMPAGNEMENT DANS L\'ATTRIBUTION' },
];

export default function Process() {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <section id="processus" className="py-24 px-4 sm:px-6 relative overflow-hidden" style={{ background: '#050F1F' }}>
      {/* Background decoration */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[400px] opacity-10"
        style={{ background: 'radial-gradient(ellipse at bottom right, #00D4FF 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="section-badge mb-6">
            <span>Notre Processus</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            RÉPONSE AUX APPELS D'OFFRES<br />
            <span className="gradient-text">&amp; CONSULTATION DES ENTREPRISES</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Un processus structuré en 6 étapes pour sécuriser vos procédures de marchés publics.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative mb-8">
            <div
              className={`timeline-line h-0.5 bg-[#0A1628] ${isVisible ? 'visible' : ''}`}
              style={{ width: '100%' }}
            />
          </div>

          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`reveal ${isVisible ? 'visible' : ''} text-center group`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Connector + number */}
                <div className="flex flex-col items-center mb-4">
                  <div
                    className="step-number mb-3 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      transitionDelay: `${i * 100}ms`,
                    }}
                  >
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute items-center justify-end pr-2" style={{ right: '-16px', top: '0', height: '48px' }}>
                    </div>
                  )}
                </div>
                <p className="text-xs font-bold text-slate-300 tracking-wide leading-tight group-hover:text-white transition-colors duration-200">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal ${isVisible ? 'visible' : ''} flex items-start gap-4 p-4 rounded-xl glass border border-brand-blue/20 card-hover`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="step-number flex-shrink-0">{step.number}</div>
              <div className="pt-2">
                <p className="text-sm font-bold text-white tracking-wide">{step.title}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight size={16} className="text-brand-cyan/40 mt-3 ml-auto flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Desktop steps with arrows */}
        <div className="hidden lg:flex items-start gap-2 mt-4">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-center flex-1">
              <div
                className={`reveal ${isVisible ? 'visible' : ''} flex-1 p-4 rounded-xl glass border border-brand-blue/20 card-hover text-center group cursor-default`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="step-number mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <p className="text-xs font-bold text-slate-300 tracking-wide leading-tight group-hover:text-white transition-colors">
                  {step.title}
                </p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight size={18} className="text-brand-cyan/50 flex-shrink-0 mx-1" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
