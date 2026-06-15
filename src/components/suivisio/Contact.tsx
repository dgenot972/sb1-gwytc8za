import { Phone, Mail, Globe, Clock, ArrowRight } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const contactItems = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '0696 670 013',
    sub: 'Du lundi au vendredi de 8h à 17h',
    href: 'tel:0696670013',
    color: '#0066CC',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@suivisio.com',
    sub: 'Réponse sous 24h ouvrées',
    href: 'mailto:contact@suivisio.com',
    color: '#00D4FF',
  },
  {
    icon: Globe,
    label: 'Site web',
    value: 'www.suivisio.com',
    sub: 'Plateforme hébergée en France',
    href: 'https://www.suivisio.com',
    color: '#F5A623',
  },
  {
    icon: Clock,
    label: 'Horaires',
    value: 'Lun – Ven',
    sub: '8h00 – 17h00',
    href: null,
    color: '#22c55e',
  },
];

export default function Contact() {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-[#020B18] relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-10"
        style={{ background: 'radial-gradient(ellipse, #0066CC 0%, transparent 70%)' }}
      />
      <div
        className="orb"
        style={{
          width: '400px',
          height: '400px',
          background: 'rgba(0,212,255,0.06)',
          top: '20%',
          right: '-100px',
          animationDelay: '2s',
        }}
      />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="section-badge mb-6">
            <span>Contactez-nous</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            PRENONS
            <span className="gradient-text"> CONTACT</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Contact info */}
          <div className={`reveal-left ${isVisible ? 'visible' : ''} space-y-4`}>
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div
                  className="flex items-start gap-4 p-5 rounded-xl glass border border-brand-blue/20 card-hover group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}
                  >
                    <Icon size={20} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-white font-semibold text-sm sm:text-base">{item.value}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{item.sub}</p>
                  </div>
                  {item.href && (
                    <ArrowRight size={16} className="text-slate-600 group-hover:text-brand-cyan ml-auto mt-2 transition-colors duration-200 flex-shrink-0" />
                  )}
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>
                  {content}
                </div>
              );
            })}
          </div>

          {/* Right: Final tagline + CTA */}
          <div className={`reveal-right ${isVisible ? 'visible' : ''}`}>
            <div className="p-8 sm:p-10 rounded-2xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1E40 0%, #0A1628 100%)', border: '1px solid rgba(0,212,255,0.3)' }}>
              {/* Top border */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #0066CC, #00D4FF, #0066CC)' }} />

              {/* Glow */}
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #0066CC 0%, transparent 70%)' }}
              />

              <div className="relative">
                <p className="text-slate-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6">Notre mission</p>

                <h3 className="font-display font-black text-xl sm:text-2xl text-white leading-tight mb-6">
                  CONSTRUIRE. CONSULTER. SÉLECTIONNER. PILOTER.
                </h3>

                <p className="text-brand-cyan text-sm font-semibold leading-relaxed mb-8">
                  De l'idée à l'attribution du marché, SUIVISIO vous accompagne.
                </p>

                <div className="h-px bg-white/10 mb-8" />

                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Que vous soyez une collectivité, une entreprise publique ou privée, notre équipe d'experts est prête à vous accompagner dans la réussite de vos projets les plus ambitieux.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="mailto:contact@suivisio.com" className="btn-primary flex-1 justify-center">
                    Envoyer un email
                    <Mail size={16} />
                  </a>
                  <a href="tel:0696670013" className="btn-outline flex-1 justify-center">
                    Appeler
                    <Phone size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
