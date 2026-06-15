import React from 'react';
import {
  ShieldCheck,
  Layers,
  Target,
  Users,
  TrendingUp,
  Lock,
} from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const reasons = [
  {
    icon: Layers,
    title: 'Expertise pluridisciplinaire',
    desc: 'Une équipe indépendante couvrant l\'ensemble des champs du conseil opérationnel.',
    color: '#0066CC',
  },
  {
    icon: Target,
    title: 'Méthodes éprouvées',
    desc: 'Des process structurés et des outils digitaux pour un pilotage maîtrisé.',
    color: '#00D4FF',
  },
  {
    icon: ShieldCheck,
    title: 'Approche sur mesure',
    desc: 'Une démarche rigoureuse, adaptée à chaque contexte et à chaque projet.',
    color: '#F5A623',
  },
  {
    icon: Users,
    title: 'Réseau de partenaires',
    desc: 'Un écosystème de partenaires qualifiés mobilisables à chaque étape.',
    color: '#a855f7',
  },
  {
    icon: TrendingUp,
    title: 'Résultats mesurables',
    desc: 'Des objectifs concrets, des indicateurs suivis, des gains durables.',
    color: '#22c55e',
  },
  {
    icon: Lock,
    title: 'Déontologie garantie',
    desc: 'Confidentialité, neutralité et éthique au cœur de chaque mission.',
    color: '#ec4899',
  },
];

export default function WhyUs() {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <section id="pourquoi" className="py-24 relative bg-[#020B18] overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full orb"
          style={{ background: 'radial-gradient(circle, rgba(0,102,204,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full orb"
          style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)', filter: 'blur(40px)', animationDelay: '3s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left — heading + visual */}
          <div ref={ref} className={`lg:col-span-5 reveal-left ${isVisible ? 'visible' : ''}`}>
            <span className="inline-block text-[#00D4FF] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Pourquoi nous choisir
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
              UN PARTENAIRE
              <span className="gradient-text"> DE CONFIANCE</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              SUIVISIO conjugue indépendance, rigueur et orientation résultats pour accompagner
              les collectivités, les entreprises et les acteurs publics dans la réussite de leurs projets.
            </p>

            {/* Decorative composition */}
            <div className="relative glass-blue rounded-2xl p-6 glow-blue">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066CC] to-[#00D4FF] flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <ShieldCheck size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-lg">100% Indépendant</div>
                  <div className="text-slate-400 text-xs uppercase tracking-wider">Sans conflit d'intérêt</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { v: '24', l: 'Clients' },
                  { v: '56', l: 'Projets' },
                  { v: '98%', l: 'Satisfaction' },
                ].map((s) => (
                  <div key={s.l} className="text-center rounded-xl bg-white/5 py-3">
                    <div className="font-display font-black text-2xl gradient-text">{s.v}</div>
                    <div className="text-slate-500 text-[10px] uppercase tracking-wider">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — reasons grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <div
                    key={r.title}
                    className={`glass rounded-xl p-5 card-hover group reveal ${isVisible ? 'visible' : ''}`}
                    style={{ transitionDelay: `${i * 100}ms`, border: `1px solid ${r.color}22` }}
                  >
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${r.color}22, ${r.color}44)`,
                        border: `1px solid ${r.color}44`,
                      }}
                    >
                      <Icon size={20} style={{ color: r.color }} />
                    </div>
                    <h3 className="font-display font-bold text-white text-base mb-2">{r.title}</h3>
                    <p className="text-slate-400 text-sm leading-snug">{r.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
