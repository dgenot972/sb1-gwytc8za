import { Phone, Mail, Globe, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Expertises', href: '#expertises' },
  { label: 'Processus', href: '#processus' },
  { label: 'Pourquoi nous', href: '#pourquoi' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Contact', href: '#contact' },
];

const expertises = [
  'Assistance à Maîtrise d\'Ouvrage',
  'Marchés & Commande Publique',
  'Loi AGEC & Réemploi',
  'Maintenance & Exploitation',
  'Performance Énergétique',
  'Accompagnement CEE',
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: '#020B18', borderTop: '1px solid rgba(0,102,204,0.15)' }}>
      {/* Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 100%, #0066CC 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center shadow-lg shadow-brand-blue/40">
                <span className="text-white font-black text-sm font-display">S</span>
              </div>
              <span className="text-xl font-black font-display tracking-wider gradient-text">SUIVISIO</span>
            </div>
            <p className="text-slate-500 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              L'Intelligence Opérationnelle
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Société de Conseil & Assistance Opérationnelle. Une approche indépendante, rigoureuse et orientée résultats.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:0696670013" className="flex items-center gap-2 text-slate-400 hover:text-white text-xs transition-colors group">
                <Phone size={12} className="text-brand-cyan group-hover:scale-110 transition-transform" />
                0696 670 013
              </a>
              <a href="mailto:contact@suivisio.com" className="flex items-center gap-2 text-slate-400 hover:text-white text-xs transition-colors group">
                <Mail size={12} className="text-brand-cyan group-hover:scale-110 transition-transform" />
                contact@suivisio.com
              </a>
              <a href="https://www.suivisio.com" className="flex items-center gap-2 text-slate-400 hover:text-white text-xs transition-colors group">
                <Globe size={12} className="text-brand-cyan group-hover:scale-110 transition-transform" />
                www.suivisio.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.15em] uppercase mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 transition-transform flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/50 group-hover:bg-brand-cyan transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertises */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.15em] uppercase mb-5">Nos Expertises</h4>
            <ul className="space-y-3">
              {expertises.map((exp) => (
                <li key={exp}>
                  <button
                    onClick={() => handleNavClick('#expertises')}
                    className="text-slate-400 hover:text-white text-xs transition-colors duration-200 text-left flex items-start gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/50 group-hover:bg-brand-cyan transition-colors mt-1 flex-shrink-0" />
                    {exp}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.15em] uppercase mb-5">Démarrer</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Prêt à optimiser vos projets ? Contactez notre équipe pour une analyse personnalisée.
            </p>
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary text-xs w-full justify-center mb-3"
            >
              Prendre contact
              <ArrowUpRight size={14} />
            </button>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {['24 Clients', '56 Projets', '98% Satisfaction', '+18% Économies'].map((stat) => (
                <div key={stat} className="text-center py-2 px-3 rounded-lg bg-white/3 border border-white/5">
                  <span className="text-xs text-slate-400">{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-xs">
              © {new Date().getFullYear()} SUIVISIO. Tous droits réservés.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-600 text-xs font-semibold tracking-[0.1em] uppercase">
              Société de Conseil & Assistance Opérationnelle
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
