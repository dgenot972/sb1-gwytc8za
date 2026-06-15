import React, { useState } from 'react';
import { Phone, Mail, Globe, Clock, Send, ArrowRight } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const contactInfos = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '0696 670 013',
    href: 'tel:0696670013',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@suivisio.com',
    href: 'mailto:contact@suivisio.com',
  },
  {
    icon: Globe,
    label: 'Site web',
    value: 'www.suivisio.com',
    href: 'https://www.suivisio.com',
  },
  {
    icon: Clock,
    label: 'Horaires',
    value: 'Lun — Ven · 8h à 17h',
    href: undefined,
  },
];

export default function Contact() {
  const { ref, isVisible } = useReveal(0.1);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demande de contact — ${form.name || 'SUIVISIO'}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`);
    window.location.href = `mailto:contact@suivisio.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #020B18 0%, #040F20 100%)' }}>
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(0,102,204,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <span className="inline-block text-[#00D4FF] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Contactez-nous
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            PARLONS DE VOTRE
            <span className="gradient-text"> PROJET</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            De l'idée à l'attribution du marché, SUIVISIO vous accompagne à chaque étape.
          </p>
          <div className="section-divider mt-8 max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left — contact infos */}
          <div className={`lg:col-span-5 space-y-4 reveal-left ${isVisible ? 'visible' : ''}`}>
            {contactInfos.map((c, i) => {
              const Icon = c.icon;
              const content = (
                <div
                  className="flex items-center gap-4 glass rounded-xl p-5 card-hover group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066CC] to-[#00D4FF] flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-110">
                    <Icon size={22} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-slate-500 text-[11px] uppercase tracking-wider mb-0.5">{c.label}</div>
                    <div className="text-white font-semibold text-base truncate">{c.value}</div>
                  </div>
                  {c.href && (
                    <ArrowRight size={16} className="ml-auto text-slate-600 group-hover:text-[#00D4FF] group-hover:translate-x-1 transition-all" />
                  )}
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={c.label}>{content}</div>
              );
            })}

            {/* Big tagline card */}
            <div className="glass-blue rounded-2xl p-6 glow-blue">
              <p className="font-display font-bold text-white text-lg leading-snug mb-2">
                CONSTRUIRE. CONSULTER. SÉLECTIONNER. PILOTER.
              </p>
              <p className="text-[#00D4FF] text-sm font-medium tracking-wide">
                L'INTELLIGENCE OPÉRATIONNELLE.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className={`lg:col-span-7 reveal-right ${isVisible ? 'visible' : ''}`}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">Nom</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Votre nom"
                    className="w-full bg-[#020B18]/60 border border-[#0066CC]/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="votre@email.com"
                    className="w-full bg-[#020B18]/60 border border-[#0066CC]/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/30 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Décrivez votre besoin ou votre projet..."
                  className="w-full bg-[#020B18]/60 border border-[#0066CC]/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/30 transition-all resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full py-4 text-xs tracking-widest uppercase">
                <span className="flex items-center justify-center gap-2">
                  {sent ? 'Message préparé' : 'Envoyer le message'}
                  <Send size={15} />
                </span>
              </button>
              {sent && (
                <p className="text-center text-[#00D4FF] text-xs animate-fade-in">
                  Votre logiciel de messagerie va s'ouvrir pour finaliser l'envoi.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
