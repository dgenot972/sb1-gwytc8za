import React from 'react';
import {
  ShieldCheck,
  Lock,
  Server,
  BarChart3,
  Clock,
  UserCheck,
} from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const guarantees = [
  { icon: ShieldCheck, title: 'Confidentialité', sub: '& Indépendance garanties' },
  { icon: Lock, title: 'RGPD', sub: 'Données sécurisées & conformes' },
  { icon: Server, title: 'Hébergé en France', sub: 'Plateforme souveraine' },
  { icon: BarChart3, title: 'Reporting', sub: 'Clair & décisionnel' },
  { icon: Clock, title: 'Accès 24/7', sub: 'Espace dédié en continu' },
  { icon: UserCheck, title: 'Interlocuteur', sub: 'Dédié & disponible' },
];

export default function Guarantees() {
  const { ref, isVisible } = useReveal(0.15);

  return (
    <section className="py-20 relative bg-[#020B18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 reveal ${isVisible ? 'visible' : ''}`}
        >
          <span className="inline-block text-[#00D4FF] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Nos Engagements
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white">
            DES GARANTIES
            <span className="gradient-text"> SOLIDES</span>
          </h2>
          <div className="section-divider mt-6 max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {guarantees.map((g, i) => {
            const Icon = g.icon;
            return (
              <div
                key={g.title}
                className={`glass rounded-xl p-5 text-center card-hover group reveal-scale ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-[#0066CC]/20 to-[#00D4FF]/20 border border-[#0066CC]/30 flex items-center justify-center mb-3 transition-transform group-hover:scale-110">
                  <Icon size={22} className="text-[#00D4FF]" />
                </div>
                <div className="font-display font-bold text-white text-sm leading-tight mb-1">
                  {g.title}
                </div>
                <div className="text-slate-500 text-[11px] leading-snug">{g.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
