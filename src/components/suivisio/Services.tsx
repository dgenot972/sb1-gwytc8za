import { Layers, FileText, Recycle, Settings, Zap, Award, Check } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const services = [
  {
    icon: Layers,
    title: 'ASSISTANCE À MAÎTRISE D\'OUVRAGE',
    color: '#0066CC',
    features: [
      'Pilotage et coordination de projet',
      'Appui à la décision',
      'Suivi opérationnel et reporting',
    ],
  },
  {
    icon: FileText,
    title: 'MARCHÉS & COMMANDE PUBLIQUE',
    color: '#00D4FF',
    features: [
      'Réponse aux appels d\'offres',
      'Consultation des fournisseurs',
      'Analyse comparative des offres',
      'Assistance à l\'attribution',
      'Rédaction de cahiers des charges',
    ],
  },
  {
    icon: Recycle,
    title: 'LOI AGEC & RÉEMPLOI',
    color: '#22c55e',
    features: [
      'Diagnostic REMD',
      'Tri 3 flux',
      'Réemploi & valorisation',
      'Écoconseils à demande',
    ],
  },
  {
    icon: Settings,
    title: 'MAINTENANCE & EXPLOITATION',
    color: '#a855f7',
    features: [
      'Gestion des prestataires',
      'Suivi des interventions',
      'Contrôle de maintenance',
      'Reporting qualité',
    ],
  },
  {
    icon: Zap,
    title: 'PERFORMANCE ÉNERGÉTIQUE',
    color: '#F5A623',
    features: [
      'Audit énergétique',
      'Optimisation des consommations',
      'Suivi & reporting',
    ],
  },
  {
    icon: Award,
    title: 'ACCOMPAGNEMENT CEE',
    color: '#0066CC',
    features: [
      'Obtention des Certificats d\'Économies d\'Énergie',
      'Identification des aides',
      'Optimisation financière',
    ],
  },
];

const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-100', 'delay-200', 'delay-300'];

export default function Services() {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <section id="expertises" className="py-24 px-4 sm:px-6 bg-[#020B18] relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(ellipse, #0066CC 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="section-badge mb-6">
            <span>Nos Expertises</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            6 DOMAINES D'
            <span className="gradient-text">EXCELLENCE</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Une expertise pluridisciplinaire au service de vos projets, de la conception à la réalisation.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`reveal ${delays[i]} ${isVisible ? 'visible' : ''} gradient-border card-hover cursor-default`}
              >
                <div className="relative p-6 rounded-xl h-full bg-[#0A1628] group overflow-hidden">
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                    style={{
                      background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${service.color}15 0%, transparent 70%)`,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: `${service.color}20`,
                      border: `1px solid ${service.color}40`,
                    }}
                  >
                    <Icon size={22} style={{ color: service.color }} />
                  </div>

                  {/* Title */}
                  <h3 className="relative font-display font-bold text-sm tracking-wide text-white mb-4 leading-tight">
                    {service.title}
                  </h3>

                  {/* Features */}
                  <ul className="relative space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-slate-400 text-sm">
                        <Check
                          size={14}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: service.color }}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
