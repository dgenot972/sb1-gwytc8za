import { Shield, Globe, BarChart3, Clock, Users, CheckCircle } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const guarantees = [
  {
    icon: Shield,
    title: 'Confidentialité & Indépendance',
    description: 'Garanties',
  },
  {
    icon: CheckCircle,
    title: 'Sécurisation des données',
    description: 'Conforme RGPD',
  },
  {
    icon: Globe,
    title: 'Plateforme hébergée',
    description: 'En France',
  },
  {
    icon: BarChart3,
    title: 'Reporting clair',
    description: 'Et décisionnel',
  },
  {
    icon: Clock,
    title: 'Accès 24/7',
    description: 'Dédié',
  },
  {
    icon: Users,
    title: 'Interlocuteur dédié',
    description: 'Personnalisé',
  },
];

export default function Guarantees() {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <section className="py-16 px-4 sm:px-6 relative overflow-hidden" style={{ background: '#050F1F' }}>
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,102,204,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={`text-center mb-10 reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            NOS <span className="gradient-text">GARANTIES</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {guarantees.map((g, i) => {
            const Icon = g.icon;
            return (
              <div
                key={g.title}
                className={`reveal ${isVisible ? 'visible' : ''} group`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex flex-col items-center text-center p-4 rounded-xl glass border border-brand-blue/15 card-hover cursor-default h-full">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-blue/25 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={18} className="text-brand-cyan" />
                  </div>
                  <p className="text-white text-xs font-bold leading-tight mb-0.5">{g.title}</p>
                  <p className="text-slate-500 text-xs">{g.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
