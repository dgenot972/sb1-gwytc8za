import React from 'react';
import { Calendar, MapPin, Users, Award } from 'lucide-react';
import { SocialAction } from '../../types/rewards';
import { FretAmount } from '../currency/FretAmount';

interface SocialActionCardProps {
  action: SocialAction;
  onParticipate: (actionId: string) => void;
}

export function SocialActionCard({ action, onParticipate }: SocialActionCardProps) {
  const isFull = action.maxParticipants && action.participantsCount >= action.maxParticipants;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">{action.title}</h3>
          <FretAmount amount={action.fretReward} size="sm" />
        </div>

        <p className="text-gray-600 mb-6">{action.description}</p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2 text-indigo-600" />
            <span>{new Date(action.date).toLocaleDateString('fr-FR')}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2 text-indigo-600" />
            <span>{action.location}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Users className="h-5 w-5 mr-2 text-indigo-600" />
            <span>
              {action.participantsCount} participants
              {action.maxParticipants && ` / ${action.maxParticipants} max`}
            </span>
          </div>
        </div>

        <button
          onClick={() => onParticipate(action.id)}
          disabled={isFull}
          className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
            isFull
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
          }`}
        >
          {isFull ? 'Complet' : 'Participer'}
        </button>
      </div>
    </div>
  );
}