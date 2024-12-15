import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Users, Briefcase, Settings } from 'lucide-react';
import type { RideRequest } from '../../types/rideshare';

const initialRequest: RideRequest = {
  id: '',
  departure: { address: '', lat: 0, lng: 0 },
  destination: { address: '', lat: 0, lng: 0 },
  date: '',
  time: '',
  passengers: 1,
  luggage: { small: 0, large: 0 },
  preferences: {
    smoking: false,
    animals: false,
    music: true
  }
};

export function PassengerRequestForm() {
  const [request, setRequest] = useState<RideRequest>(initialRequest);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Passenger request:', request);
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Rechercher un trajet
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Départ
            </label>
            <div className="mt-1 relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
              <input
                type="text"
                className="input-custom"
                placeholder="Adresse de départ"
                value={request.departure.address}
                onChange={(e) => setRequest({
                  ...request,
                  departure: { ...request.departure, address: e.target.value }
                })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Destination
            </label>
            <div className="mt-1 relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
              <input
                type="text"
                className="input-custom"
                placeholder="Adresse d'arrivée"
                value={request.destination.address}
                onChange={(e) => setRequest({
                  ...request,
                  destination: { ...request.destination, address: e.target.value }
                })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <div className="mt-1 relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
              <input
                type="date"
                className="input-custom"
                value={request.date}
                onChange={(e) => setRequest({ ...request, date: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Heure
            </label>
            <div className="mt-1 relative">
              <Clock className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
              <input
                type="time"
                className="input-custom"
                value={request.time}
                onChange={(e) => setRequest({ ...request, time: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Passagers
            </label>
            <div className="mt-1 relative">
              <Users className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
              <input
                type="number"
                min="1"
                max="8"
                className="input-custom"
                value={request.passengers}
                onChange={(e) => setRequest({
                  ...request,
                  passengers: parseInt(e.target.value)
                })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Petits bagages
            </label>
            <div className="mt-1 relative">
              <Briefcase className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
              <input
                type="number"
                min="0"
                className="input-custom"
                value={request.luggage.small}
                onChange={(e) => setRequest({
                  ...request,
                  luggage: {
                    ...request.luggage,
                    small: parseInt(e.target.value)
                  }
                })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Grands bagages
            </label>
            <div className="mt-1 relative">
              <Briefcase className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
              <input
                type="number"
                min="0"
                className="input-custom"
                value={request.luggage.large}
                onChange={(e) => setRequest({
                  ...request,
                  luggage: {
                    ...request.luggage,
                    large: parseInt(e.target.value)
                  }
                })}
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Settings className="h-5 w-5 text-indigo-500 mr-2" />
            <h3 className="text-sm font-medium text-gray-700">Préférences</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={request.preferences.smoking}
                onChange={(e) => setRequest({
                  ...request,
                  preferences: {
                    ...request.preferences,
                    smoking: e.target.checked
                  }
                })}
              />
              <span className="ml-2 text-sm text-gray-600">Fumeur accepté</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={request.preferences.animals}
                onChange={(e) => setRequest({
                  ...request,
                  preferences: {
                    ...request.preferences,
                    animals: e.target.checked
                  }
                })}
              />
              <span className="ml-2 text-sm text-gray-600">Animaux acceptés</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={request.preferences.music}
                onChange={(e) => setRequest({
                  ...request,
                  preferences: {
                    ...request.preferences,
                    music: e.target.checked
                  }
                })}
              />
              <span className="ml-2 text-sm text-gray-600">Musique</span>
            </label>
          </div>
        </div>

        <button type="submit" className="btn-primary">
          <Users className="h-5 w-5 mr-2" />
          Rechercher
        </button>
      </form>
    </div>
  );
}