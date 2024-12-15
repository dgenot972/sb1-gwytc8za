import React from 'react';
import { Leaf, Heart, Shield, Recycle } from 'lucide-react';

const initiatives = [
  {
    title: "Nettoyage des plages",
    date: "Tous les premiers samedis du mois",
    image: "https://images.unsplash.com/photo-1567091413493-c8f4b2a56e0c?auto=format&fit=crop&q=80&w=1200",
    description: "Rejoignez notre communauté pour nettoyer les plages de la Martinique. Gagnez des Frets en participant !",
    icon: Recycle,
    color: "from-blue-500/20 to-green-500/20"
  },
  {
    title: "Programme Frets Solidaires",
    date: "Action permanente",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1200",
    description: "1% de tous les Frets générés sont reversés à des associations locales de protection de l'environnement.",
    icon: Heart,
    color: "from-pink-500/20 to-red-500/20"
  },
  {
    title: "Prévention routière",
    date: "Sessions mensuelles",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200",
    description: "Formations gratuites pour nos Freters : sécurité routière, éco-conduite, premiers secours.",
    icon: Shield,
    color: "from-indigo-500/20 to-purple-500/20"
  }
];

export function BlogSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full mb-6 animate-float">
            <Leaf className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Notre engagement écologique
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fretla s'engage pour un transport plus responsable et une communauté solidaire.
            Ensemble, construisons un avenir plus vert pour la Martinique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {initiatives.map((initiative, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                   style={{ backgroundImage: `linear-gradient(to bottom right, ${initiative.color})` }} />
              <div className="relative z-10">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={initiative.image} 
                    alt={initiative.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <initiative.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-sm font-medium text-indigo-600 mb-3">{initiative.date}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-600 transition-colors">{initiative.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{initiative.description}</p>
                  <button className="mt-6 inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                    En savoir plus 
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transform -skew-y-6" />
          <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white overflow-hidden">
            <div className="absolute inset-0 bg-white/5 pattern-dots" />
            <div className="relative max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6">
                Fini les voyages à vide, réservez votre place !
              </h3>
              <p className="text-xl mb-8 text-indigo-100 leading-relaxed">
                Ensemble, créons une nouvelle façon de nous déplacer et de partager nos ressources.
                Chaque trajet compte pour notre île et son avenir.
              </p>
              <button className="mt-6 w-full bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
                Devenir Freter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}