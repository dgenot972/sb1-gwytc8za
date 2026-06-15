import { CheckCircle, Shield, Target, BarChart3, Users, Star, Award } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const reasons = [
  {
    icon: Award,
    title: 'Expertise pluridisciplinaire et indépendante',
    description: 'Des compétences couvrant tous les aspects de vos projets, sans conflits d\'intérêts.',
  },
  {
    icon: Target,
    title: 'Méthodes éprouvées et outils digitaux',
    description: 'Des processus structurés et des outils modernes pour maximiser l\'efficacité.',
  },
  {
    icon: CheckCircle,
    title: 'Approche sur mesure et rigoureuse',
    description: 'Chaque mission est adaptée à vos besoins spécifiques avec la plus grande rigueur.',
  },
  {
    icon: Users,
    title: 'Réseau de partenaires qualifiés',
    description: 'Un réseau de partenaires sélectionnés pour leur excellence et leur fiabilité.',
  },
  {
    icon: BarChart3,
    title: 'Résultats mesurables et durables',
    description: 'Des indicateurs clairs et des livrables concrets pour suivre votre progression.',
  },
  {
    icon: Shield,
    title: 'Confidentialité et déontologie garanties',
    description: 'Toutes vos données et informations sont protégées avec la plus stricte confidentialité.',
  },
];

const delays = [0, 100, 200, 100, 200, 300];

export default function WhyUs() {
  const { ref, isVisible } = useReveal(0.1);
  const { ref: leftRef, isVisible: leftVisible } = useReveal(0.1);

  return (
    <section id="pourquoi" className="py-24 px-4 sm:px-6 relative overflow-hidden" style={{ background: '#050F1F' }}>
      {/* Background */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[500px] opacity-8"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(0,212,255,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`} ref={ref}>
          <div className="section-badge mb-6">
            <span>Pourquoi Nous</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            POURQUOI NOUS
            <span className="gradient-text"> CHOISIR ?</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Six raisons qui font de SUIVISIO votre partenaire de confiance pour tous vos projets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Decorative visual */}
          <div className="hidden lg:flex items-center justify-center" ref={leftRef}>
            <div className={`reveal-left ${leftVisible ? 'visible' : ''} relative w-full max-w-sm`}>
              {/* Central hub */}
              <div className="relative mx-auto w-48 h-48">
                {/* Outer ring */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-brand-blue/30 animate-spin-slow"
                  style={{ borderStyle: 'dashed' }}
                />
                {/* Middle ring */}
                <div
                  className="absolute inset-6 rounded-full border border-brand-cyan/20 animate-spin-slow"
                  style={{ animationDirection: 'reverse', animationDuration: '15s' }}
                />
                {/* Inner core */}
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center shadow-lg glow-blue">
                  <Star size={28} className="text-white" />
                </div>

                {/* Orbiting dots */}
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      background: i % 2 === 0 ? '#0066CC' : '#00D4FF',
                      top: `${50 - 45 * Math.cos((deg * Math.PI) / 180)}%`,
                      left: `${50 + 45 * Math.sin((deg * Math.PI) / 180)}%`,
                      transform: 'translate(-50%, -50%)',
                      boxShadow: `0 0 8px ${i % 2 === 0 ? '#0066CC' : '#00D4FF'}`,
                    }}
                  />
                ))}
              </div>

              {/* Stats pills */}
              <div className="mt-8 space-y-3">
                {[
                  { label: 'Indépendance', pct: 100 },
                  { label: 'Satisfaction Client', pct: 98 },
                  { label: 'Économies Réalisées', pct: 82 },
                ].map((item) => (
                  <div key={item.label} className="glass rounded-lg p-3">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-slate-300 font-medium">{item.label}</span>
                      <span className="text-brand-cyan font-bold">{item.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: leftVisible ? `${item.pct}%` : '0%',
                          background: 'linear-gradient(90deg, #0066CC, #00D4FF)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className={`reveal ${isVisible ? 'visible' : ''} p-5 rounded-xl glass border border-brand-blue/20 card-hover group cursor-default`}
                  style={{ transitionDelay: `${delays[i]}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={18} className="text-brand-cyan" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1 leading-tight">{reason.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
