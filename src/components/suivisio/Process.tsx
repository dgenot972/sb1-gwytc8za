import React from 'react';
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
    <section id="processus" className="py-24 relative bg-[#040F20]">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      {/* Top fade */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#020B18] to-transparent pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#020B18] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <span className="inline-block text-[#00D4FF] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Notre Processus
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white mb-4 max-w-3xl mx-auto leading-tight">
            RÉPONSE AUX APPELS D'OFFRES &{' '}
            <span className="gradient-text">CONSULTATION DES ENTREPRISES</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Une méthodologie éprouvée en 6 étapes pour sécuriser vos procédures de marché.
          </p>
          <div className="section-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Steps — horizontal with connecting line */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066CC]/30 to-transparent" />
          {isVisible && (
            <div
              className="hidden lg:block absolute top-8 left-[8.33%] right-[8.33%] h-0.5 bg-gradient-to-r from-[#0066CC] to-[#00D4FF] timeline-line-animated"
              style={{ transformOrigin: 'left' }}
            />
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-3">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative flex flex-col items-center text-center group reveal ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Arrow (desktop, between steps) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 -right-1.5 z-20 text-[#0066CC]/60">
                    <ArrowRight size={14} />
                  </div>
                )}

                {/* Number circle */}
                <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, #0066CC, #00D4FF)',
                    boxShadow: '0 0 0 4px rgba(0,102,204,0.15), 0 4px 20px rgba(0,102,204,0.3)',
                  }}
                >
                  <span className="font-display font-black text-lg text-white">{step.number}</span>
                </div>

                {/* Title */}
                <p className="text-slate-300 text-xs font-semibold tracking-wider leading-tight uppercase group-hover:text-white transition-colors">
                  {step.title}
                </p>

                {/* Arrow (mobile, below step) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden mt-4 text-[#0066CC]/60 rotate-90">
                    <ArrowRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-16 text-center reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '800ms' }}>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary inline-flex text-xs tracking-widest uppercase px-8 py-4"
          >
            <span className="flex items-center gap-2">
              Démarrer votre projet
              <ArrowRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
