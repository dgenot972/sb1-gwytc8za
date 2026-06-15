import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';

const particles = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 8,
  duration: Math.random() * 6 + 6,
  opacity: Math.random() * 0.5 + 0.1,
}));

const actions = ['CONSEILLER', 'COORDONNER', 'OPTIMISER', 'PERFORMER'];

const stats = [
  { value: '24', label: 'Clients' },
  { value: '56', label: 'Projets' },
  { value: '98%', label: 'Satisfaction' },
  { value: '+18%', label: 'Économies' },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--spot-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty('--spot-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-bg"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Cursor spotlight */}
      <div className="spotlight" />

      {/* Animated aurora blobs */}
      <div
        className="aurora-blob w-[40rem] h-[40rem] -top-48 -left-40"
        style={{ background: 'radial-gradient(circle, rgba(0,102,204,0.30) 0%, transparent 70%)' }}
      />
      <div
        className="aurora-blob w-[34rem] h-[34rem] top-1/3 -right-40"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.20) 0%, transparent 70%)',
          animationDelay: '5s',
        }}
      />
      <div
        className="aurora-blob w-[30rem] h-[30rem] -bottom-40 left-1/4"
        style={{
          background: 'radial-gradient(circle, rgba(245,166,35,0.10) 0%, transparent 70%)',
          animationDelay: '10s',
        }}
      />

      {/* Orbs */}
      <div
        className="orb absolute -top-40 -left-40 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,102,204,0.2) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="orb absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animationDelay: '3s',
        }}
      />

      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: p.id % 3 === 0 ? '#00D4FF' : p.id % 3 === 1 ? '#0066CC' : '#ffffff',
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-24 pb-16">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-blue mb-8 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
          <span className="text-[#00D4FF] text-xs font-semibold tracking-widest uppercase">
            PLATEFORME DE CONSEIL EN SUPPORT DE L'ÉTAT
          </span>
        </div>

        {/* Main title */}
        <h1
          className={`font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight mb-4 transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="shimmer-text">SUIVISIO</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`font-display font-medium text-sm sm:text-base md:text-lg text-slate-400 tracking-[0.3em] uppercase mb-10 transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          SOCIÉTÉ DE CONSEIL & ASSISTANCE OPÉRATIONNELLE
        </p>

        {/* Rotating action line */}
        <div
          className={`flex flex-wrap items-center justify-center gap-x-3 text-xl sm:text-2xl md:text-3xl font-display font-bold mb-10 transition-all duration-700 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-slate-300">Nous savons</span>
          <span className="rotating-words h-9 sm:h-10 md:h-11 min-w-[12ch]">
            {actions.map((action, i) => (
              <span
                key={action}
                className="rotating-word gradient-text"
                style={{ animationDelay: `${i * 2}s` }}
              >
                {action}.
              </span>
            ))}
          </span>
        </div>

        {/* Une approche */}
        <p
          className={`text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-4 leading-relaxed transition-all duration-700 delay-400 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-white font-semibold">Une approche indépendante, rigoureuse et orientée résultats.</span>
        </p>

        {/* Mission */}
        <p
          className={`text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Nous accompagnons les collectivités, les entreprises et les acteurs publics dans la réussite de leurs projets.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="#expertises"
            onClick={(e) => { e.preventDefault(); scrollTo('#expertises'); }}
            className="btn-primary group text-sm tracking-widest uppercase px-8 py-4"
          >
            <span className="flex items-center gap-2">
              <Sparkles size={16} />
              Découvrir nos expertises
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="shine" />
          </a>
          <a
            href="#tarifs"
            onClick={(e) => { e.preventDefault(); scrollTo('#tarifs'); }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-[#0066CC]/50 text-slate-200 text-sm font-semibold tracking-widest uppercase hover:border-[#00D4FF]/60 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            Voir les tarifs
          </a>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto transition-all duration-700 delay-600 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative glass rounded-xl px-4 py-3 text-center card-hover overflow-hidden"
            >
              <span className="conic-ring" />
              <div className="relative font-display font-black text-2xl sm:text-3xl gradient-text-gold">{stat.value}</div>
              <div className="relative text-slate-400 text-xs uppercase tracking-wider mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollTo('#expertises')}
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-[#00D4FF] transition-colors group"
        >
          <span className="text-xs uppercase tracking-widest">Défiler</span>
          <ChevronDown size={20} className="scroll-nudge group-hover:text-[#00D4FF]" />
        </button>
      </div>
    </section>
  );
}
