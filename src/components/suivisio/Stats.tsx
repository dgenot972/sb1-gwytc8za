import { Users, Briefcase, Star, TrendingUp } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { useCounter } from '../../hooks/useCounter';

interface StatCardProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  color: string;
  delay: number;
  isVisible: boolean;
}

function StatCard({ icon: Icon, value, suffix, prefix = '', label, color, delay, isVisible }: StatCardProps) {
  const count = useCounter(value, 2000, isVisible);

  return (
    <div
      className={`stat-pop ${isVisible ? 'visible' : ''} relative overflow-hidden rounded-2xl p-6 sm:p-8 group cursor-default`}
      style={{
        transitionDelay: `${delay}ms`,
        background: `linear-gradient(135deg, rgba(0,102,204,0.12) 0%, rgba(0,212,255,0.04) 100%)`,
        border: '1px solid rgba(0,102,204,0.25)',
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse 80% 80% at 50% 100%, ${color}18 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ background: `${color}20`, border: `1px solid ${color}40` }}
      >
        <Icon size={22} style={{ color }} />
      </div>

      {/* Value */}
      <div className="relative">
        <div
          className="font-display font-black text-4xl sm:text-5xl mb-2"
          style={{
            background: `linear-gradient(135deg, #ffffff, ${color})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {prefix}{count}{suffix}
        </div>
        <div className="text-slate-400 text-sm font-medium tracking-wide">{label}</div>
      </div>

      {/* Bottom border glow */}
      <div
        className="absolute bottom-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />
    </div>
  );
}

const statsData = [
  {
    icon: Users,
    value: 24,
    suffix: '',
    label: 'Clients Accompagnés',
    color: '#0066CC',
    delay: 0,
  },
  {
    icon: Briefcase,
    value: 56,
    suffix: '',
    label: 'Projets Réalisés',
    color: '#00D4FF',
    delay: 150,
  },
  {
    icon: Star,
    value: 98,
    suffix: '%',
    label: 'Taux de Satisfaction',
    color: '#F5A623',
    delay: 300,
  },
  {
    icon: TrendingUp,
    value: 18,
    suffix: '%',
    prefix: '+',
    label: 'Économies Générées',
    color: '#22c55e',
    delay: 450,
  },
];

export default function Stats() {
  const { ref, isVisible } = useReveal(0.2);

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#020B18] relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, #0066CC 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="section-badge mb-6">
            <span>Nos Résultats</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            DES RÉSULTATS
            <span className="gradient-text"> MESURABLES</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Nos performances en chiffres, au service de vos objectifs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <StatCard
              key={stat.label}
              {...stat}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
