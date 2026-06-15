import React from 'react';
import { Users, Briefcase, Star, TrendingUp } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { useCounter } from '../../hooks/useCounter';

const statsData = [
  { icon: Users, value: 24, suffix: '', label: 'Clients accompagnés', color: '#0066CC' },
  { icon: Briefcase, value: 56, suffix: '', label: 'Projets réalisés', color: '#00D4FF' },
  { icon: Star, value: 98, suffix: '%', label: 'Taux de satisfaction', color: '#F5A623' },
  { icon: TrendingUp, value: 18, suffix: '%', label: 'Économies générées', prefix: '+', color: '#22c55e' },
];

function StatCard({ stat, isActive, delay }: { stat: typeof statsData[0]; isActive: boolean; delay: number }) {
  const count = useCounter(stat.value, 2000, isActive);
  const Icon = stat.icon;

  return (
    <div
      className="relative glass rounded-2xl p-8 text-center card-hover overflow-hidden group"
      style={{
        transitionDelay: `${delay}ms`,
        border: `1px solid ${stat.color}22`,
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${stat.color}10 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
        style={{
          background: `linear-gradient(135deg, ${stat.color}22, ${stat.color}44)`,
          border: `1px solid ${stat.color}44`,
        }}
      >
        <Icon size={26} style={{ color: stat.color }} />
      </div>

      {/* Count */}
      <div
        className={`font-display font-black text-5xl sm:text-6xl mb-2 stat-animated`}
        style={{
          color: stat.color,
          textShadow: `0 0 30px ${stat.color}44`,
          animationDelay: `${delay}ms`,
          opacity: isActive ? 1 : 0,
        }}
      >
        {stat.prefix || ''}{isActive ? count : 0}{stat.suffix}
      </div>

      {/* Label */}
      <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats() {
  const { ref, isVisible } = useReveal(0.2);

  return (
    <section className="py-24 relative bg-[#020B18]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(0,102,204,0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={ref} className={`text-center mb-14 reveal ${isVisible ? 'visible' : ''}`}>
          <span className="inline-block text-[#00D4FF] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Nos Résultats
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            DES CHIFFRES QUI
            <span className="gradient-text"> PARLENT</span>
          </h2>
          <div className="section-divider mt-6 max-w-xs mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <StatCard stat={stat} isActive={isVisible} delay={i * 200} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
