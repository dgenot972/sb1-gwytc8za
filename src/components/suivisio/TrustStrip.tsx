import React from 'react';
import { Building2, Landmark, Factory, ShieldCheck, FileSignature, Recycle } from 'lucide-react';

const sectors = [
  { icon: Landmark, label: 'Collectivités territoriales' },
  { icon: Building2, label: 'Entreprises privées' },
  { icon: ShieldCheck, label: 'Acteurs publics' },
  { icon: FileSignature, label: 'Marchés publics' },
  { icon: Recycle, label: 'Certificats d\'économies d\'énergie' },
  { icon: Factory, label: 'Maîtrise d\'ouvrage' },
];

export default function TrustStrip() {
  // Duplicated list so the marquee can loop seamlessly (-50% translate).
  const loop = [...sectors, ...sectors];

  return (
    <section className="relative bg-[#040F20] border-y border-[#0066CC]/10 py-8 overflow-hidden">
      <p className="text-center text-slate-500 text-xs uppercase tracking-[0.3em] mb-6">
        Nous accompagnons les acteurs de la transformation publique &amp; privée
      </p>
      <div className="marquee-mask">
        <div className="marquee-track gap-12 px-6">
          {loop.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={`${s.label}-${i}`}
                className="flex items-center gap-3 text-slate-400 whitespace-nowrap"
              >
                <span className="w-9 h-9 rounded-lg glass-blue flex items-center justify-center">
                  <Icon size={18} className="text-[#00D4FF]" />
                </span>
                <span className="font-display font-semibold text-sm tracking-wide">{s.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
