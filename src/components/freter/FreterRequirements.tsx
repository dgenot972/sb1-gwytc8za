import React, { useState } from 'react';
import { Shield, CheckCircle, ChevronDown } from 'lucide-react';
import { VEHICLE_TYPES } from '../../types/vehicle';
import { FretAmount } from '../currency/FretAmount';
import { FreterRegistrationForm } from './FreterRegistrationForm';

export function FreterRequirements() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  if (showRegistrationForm) {
    return <FreterRegistrationForm />;
  }

  return (
    <div id="freter-requirements" className="relative scroll-mt-20">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">
              Rejoignez la communauté des Freters
            </h2>
          </div>
          <ChevronDown className={`h-6 w-6 text-gray-400 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </div>
      </button>

      <div className={`mt-4 transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VEHICLE_TYPES.map((type) => (
            <div key={type.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{type.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{type.description}</p>
              
              <div className="space-y-3">
                <div className="text-sm">
                  <span className="font-medium">Capacité max :</span>
                  <ul className="mt-1 space-y-1">
                    <li>• {type.maxWeight} kg</li>
                    <li>• {type.maxVolume} m³</li>
                  </ul>
                </div>

                <div>
                  <span className="text-sm font-medium">Prérequis :</span>
                  <ul className="mt-1 space-y-1">
                    {type.requirements.map((req, index) => (
                      <li key={index} className="text-sm flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <FretAmount amount={type.fretReward} showEuroEquivalent size="sm" />
                  <p className="text-xs text-gray-500 mt-1">par kilomètre</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg text-white">
          <h4 className="text-xl font-semibold mb-4">
            Pourquoi devenir Freter ?
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-3 text-indigo-200" />
              Rejoignez une communauté de professionnels certifiés
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-3 text-indigo-200" />
              Optimisez vos trajets et réduisez les véhicules vides
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-3 text-indigo-200" />
              Bénéficiez d'une assurance adaptée à votre activité
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-3 text-indigo-200" />
              Développez votre activité avec une clientèle locale
            </li>
          </ul>

          <button
            onClick={() => setShowRegistrationForm(true)}
            className="mt-6 w-full bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Devenir Freter
          </button>
        </div>
      </div>
    </div>
  );
}