import React from 'react';
import { Phone, Mail, Globe, ArrowUp } from 'lucide-react';

const footerLinks = [
  { label: 'Expertises', href: '#expertises' },
  { label: 'Processus', href: '#processus' },
  { label: 'Pourquoi nous', href: '#pourquoi' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Contact', href: '#contact' },
];

const expertiseLinks = [
  'Assistance à maîtrise d\'ouvrage',
  'Marchés & commande publique',
  'Loi AGEC & réemploi',
  'Maintenance & exploitation',
  'Performance énergétique',
  'Accompagnement CEE',
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020B18] border-t border-[#0066CC]/15 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.07] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top CTA banner */}
        <div className="text-center mb-14">
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-3 leading-tight">
            DE L'IDÉE À L'ATTRIBUTION DU MARCHÉ,
            <br className="hidden sm:block" />
            <span className="gradient-text"> SUIVISIO VOUS ACCOMPAGNE.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0066CC] to-[#00D4FF] flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-white font-black text-base">S</span>
              </div>
              <span className="font-display font-black text-xl tracking-wider gradient-text">SUIVISIO</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-2">
              Société de conseil & assistance opérationnelle.
            </p>
            <p className="text-[#00D4FF] text-xs font-semibold tracking-widest uppercase">
              L'intelligence opérationnelle
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                    className="text-slate-400 text-sm hover:text-[#00D4FF] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertises */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">Expertises</h4>
            <ul className="space-y-2.5">
              {expertiseLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#expertises"
                    onClick={(e) => { e.preventDefault(); scrollTo('#expertises'); }}
                    className="text-slate-400 text-sm hover:text-[#00D4FF] transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:0696670013" className="flex items-center gap-3 text-slate-400 text-sm hover:text-[#00D4FF] transition-colors">
                  <Phone size={16} className="text-[#0066CC]" />
                  0696 670 013
                </a>
              </li>
              <li>
                <a href="mailto:contact@suivisio.com" className="flex items-center gap-3 text-slate-400 text-sm hover:text-[#00D4FF] transition-colors">
                  <Mail size={16} className="text-[#0066CC]" />
                  contact@suivisio.com
                </a>
              </li>
              <li>
                <a href="https://www.suivisio.com" className="flex items-center gap-3 text-slate-400 text-sm hover:text-[#00D4FF] transition-colors">
                  <Globe size={16} className="text-[#0066CC]" />
                  www.suivisio.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} SUIVISIO. Tous droits réservés.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-slate-500 text-xs hover:text-[#00D4FF] transition-colors group"
          >
            Retour en haut
            <span className="w-7 h-7 rounded-full border border-[#0066CC]/30 flex items-center justify-center group-hover:border-[#00D4FF]/60 group-hover:-translate-y-0.5 transition-all">
              <ArrowUp size={13} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
