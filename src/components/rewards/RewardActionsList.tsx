import React from 'react';
import { Award } from 'lucide-react';
import { REWARD_ACTIONS } from '../../data/rewardsData';
import { FretAmount } from '../currency/FretAmount';

export function RewardActionsList() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Gagnez des Frets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REWARD_ACTIONS.map(action => (
          <div 
            key={action.id}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">{action.name}</h3>
              <FretAmount amount={action.fretReward} size="sm" />
            </div>

            <p className="text-gray-600 text-sm mb-4">{action.description}</p>

            <div className="flex items-center justify-between text-sm">
              <span className="text-indigo-600 font-medium">
                {action.frequency === 'once' ? 'Une fois' : 
                 action.frequency === 'daily' ? 'Quotidien' :
                 action.frequency === 'weekly' ? 'Hebdomadaire' : 'Mensuel'}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                action.type === 'ecological' ? 'bg-green-100 text-green-800' :
                action.type === 'social' ? 'bg-blue-100 text-blue-800' :
                'bg-purple-100 text-purple-800'
              }`}>
                {action.type === 'ecological' ? 'Écologique' :
                 action.type === 'social' ? 'Social' : 'Parrainage'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}