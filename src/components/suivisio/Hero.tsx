import { ArrowRight, ChevronDown } from 'lucide-react';

const particles = [
  { size: 3, top: '15%', left: '10%', delay: '0s', duration: '8s', opacity: 0.6 },
  { size: 2, top: '25%', left: '85%', delay: '1s', duration: '10s', opacity: 0.4 },
  { size: 4, top: '40%', left: '5%', delay: '2s', duration: '7s', opacity: 0.5 },
  { size: 2, top: '60%', left: '92%', delay: '0.5s', duration: '9s', opacity: 0.3 },
  { size: 3, top: '70%', left: '15%', delay: '3s', duration: '11s', opacity: 0.5 },
  { size: 2, top: '80%', left: '75%', delay: '1.5s', duration: '8s', opacity: 0.4 },
  { size: 4, top: '20%', left: '50%', delay: '2.5s', duration: '9s', opacity: 0.3 },
  { size: 2, top: '50%', left: '30%', delay: '0.8s', duration: '12s', opacity: 0.5 },
  { size: 3, top: '35%', left: '65%', delay: '4s', duration: '7s', opacity: 0.4 },
  { size: 2, top: '85%', left: '45%', delay: '1.2s', duration: '10s', opacity: 0.3 },
  { size: 4, top: '10%', left: '35%', delay: '3.5s', duration: '8s', opacity: 0.5 },
  { size: 2, top: '55%', left: '80%', delay: '2s', duration: '11s', opacity: 0.4 },
  { size: 3, top: '75%', left: '55%', delay: '0.3s', duration: '9s', opacity: 0.3 },
  { size: 2, top: '30%', left: '20%', delay: '4.5s', duration: '7s', opacity: 0.6 },
  { size: 4, top: '65%', left: '38%', delay: '1.8s', duration: '10s', opacity: 0.4 },
  { size: 2, top: '45%', left: '70%', delay: '3.2s', duration: '8s', opacity: 0.5 },
  { size: 3, top: '90%', left: '20%', delay: '0.6s', duration: '12s', opacity: 0.3 },
  { size: 2, top: '18%', left: '72%', delay: '2.8s', duration: '9s', opacity: 0.4 },
  { size: 4, top: '52%', left: '12%', delay: '1.4s', duration: '7s', opacity: 0.5 },
  { size: 2, top: '38%', left: '88%', delay: '3.8s', duration: '11s', opacity: 0.3 },
];

const stats = [
  { value: '24', label: 'Clients' },
  { value: '56', label: 'Projets' },
  { value: '98%', label: 'Satisfaction' },
  { value: '+18%', label: 'Économies' },
];

const actions = ['CONSEILLER', 'COORDONNER', 'OPTIMISER', 'PERFORMER'];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center hero-bg overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Glow orbs */}
      <div
        className="orb"
        style={{
          width: '600px',
          height: '600px',
          background: 'rgba(0, 102, 204, 0.18)',
          top: '-100px',
          left: '-200px',
          animationDelay: '0s',
        }}
      />
      <div
        className="orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'rgba(0, 212, 255, 0.10)',
          bottom: '-100px',
          right: '-150px',
          animationDelay: '4s',
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: p.top,
            left: p.left,
            background: i % 3 === 0 ? '#00D4FF' : i % 3 === 1 ? '#0066CC' : '#ffffff',
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-cyan/30 bg-brand-blue/10 mb-8"
          style={{ animation: 'fadeInUp 0.7s ease-out 0.1s both' }}
        >
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
          <span className="text-brand-cyan text-xs font-semibold tracking-[0.15em] uppercase">
            Plateforme de Conseil en Support de l'État
          </span>
        </div>

        {/* Main title */}
        <h1
          className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-4 shimmer-text"
          style={{ animation: 'fadeInUp 0.7s ease-out 0.2s both' }}
        >
          SUIVISIO
        </h1>

        {/* Subtitle */}
        <p
          className="text-slate-300 text-base sm:text-lg md:text-xl font-medium tracking-[0.2em] uppercase mb-8"
          style={{ animation: 'fadeInUp 0.7s ease-out 0.35s both' }}
        >
          Société de Conseil &amp; Assistance Opérationnelle
        </p>

        {/* Action verbs */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10"
          style={{ animation: 'fadeInUp 0.7s ease-out 0.5s both' }}
        >
          {actions.map((action, i) => (
            <span key={action} className="flex items-center gap-2 sm:gap-3">
              <span
                className="text-xs sm:text-sm font-bold tracking-[0.2em] gradient-text"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.55 + i * 0.1}s both`,
                }}
              >
                {action}
              </span>
              {i < actions.length - 1 && (
                <span className="text-brand-cyan/60 text-sm font-bold">•</span>
              )}
            </span>
          ))}
        </div>

        {/* Mission text */}
        <p
          className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ animation: 'fadeInUp 0.7s ease-out 0.7s both' }}
        >
          Une approche <span className="text-white font-semibold">indépendante, rigoureuse et orientée résultats</span>.
          Nous accompagnons les collectivités, les entreprises et les acteurs publics dans la réussite de leurs projets.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ animation: 'fadeInUp 0.7s ease-out 0.85s both' }}
        >
          <a href="#expertises" className="btn-primary">
            Découvrir nos expertises
            <ArrowRight size={16} />
          </a>
          <a href="#tarifs" className="btn-outline">
            Voir les tarifs
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          style={{ animation: 'fadeInUp 0.7s ease-out 1s both' }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center px-4 py-3 rounded-xl glass border border-brand-blue/20"
            >
              <div className="text-2xl font-black font-display gradient-text">{stat.value}</div>
              <div className="text-slate-400 text-xs font-medium mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-gentle"
        style={{ animation: 'fadeIn 1s ease-out 1.5s both' }}
      >
        <span className="text-slate-500 text-xs font-medium tracking-widest uppercase">Défiler</span>
        <ChevronDown size={20} className="text-brand-cyan/60" />
      </div>
    </section>
  );
}
