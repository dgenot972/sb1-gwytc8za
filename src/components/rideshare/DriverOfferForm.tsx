import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Car, Euro, Plus } from 'lucide-react';
import type { RideOffer, Driver } from '../../types/rideshare';

const mockDriver: Driver = {
  id: '1',
  vehicle: {
    type: 'car',
    brand: 'Renault',
    model: 'Clio',
    year: 2020,
    color: 'Gris',
    seats: 4,
    comfort: 'comfort'
  },
  preferences: {
    smoking: false,
    animals: true,
    music: true
  },
  rating: 4.8,
  completedRides: 42
};

const initialOffer: Omit<RideOffer, 'id' | 'driver'> = {
  departure: { address: '', lat: 0, lng: 0 },
  destination: { address: '', lat: 0, lng: 0 },
  date: '',
  time: '',
  passengers: 0,
  luggage: { small: 0, large: 0 },
  preferences: mockDriver.preferences,
  pricePerSeat: 0,
  availableSeats: mockDriver.vehicle.seats,
  stops: [],
  status: 'pending'
};

export function DriverOfferForm() {
  const [offer, setOffer] = useState(initialOffer);
  const [showStopForm, setShowStopForm] = useState(false);
  const [newStop, setNewStop] = useState({ address: '', time: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Driver offer:', { ...offer, driver: mockDriver });
  };

  const addStop = () => {
    if (newStop.address && newStop.time) {
      setOffer({
        ...offer,
        stops: [...offer.stops, { ...newStop, lat: 0, lng: 0 }]
      });
      setNewStop({ address: '', time: '' });
      setShowStopForm(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Proposer un trajet
      </h2>

      <div className="mb-8 p-4 bg-indigo-50 rounded-lg">
        <div className="flex items-center">
          <Car className="h-6 w-6 text-indigo-600 mr-3" />
          <div>
            <h3 className="font-medium text-gray-900">
              {mockDriver.vehicle.brand} {mockDriver.vehicle.model}
            </h3>
            <p className="text-sm text-gray-600">
              {mockDriver.vehicle.color} • {mockDriver.vehicle.seats} places
            </p>
          </div>
        </div>
      </div>

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
                value={offer.departure.address}
                onChange={(e) => setOffer({
                  ...offer,
                  departure: { ...offer.departure, address: e.target.value }
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
                value={offer.destination.address}
                onChange={(e) => setOffer({
                  ...offer,
                  destination: { ...offer.destination, address: e.target.value }
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
                value={offer.date}
                onChange={(e) => setOffer({ ...offer, date: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Heure de départ
            </label>
            <div className="mt-1 relative">
              <Clock className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
              <input
                type="time"
                className="input-custom"
                value={offer.time}
                onChange={(e) => setOffer({ ...offer, time: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Prix par place
            </label>
            <div className="mt-1 relative">
              <Euro className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
              <input
                type="number"
                min="0"
                step="0.5"
                className="input-custom"
                value={offer.pricePerSeat}
                onChange={(e) => setOffer({
                  ...offer,
                  pricePerSeat: parseFloat(e.target.value)
                })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Places disponibles
            </label>
            <div className="mt-1 relative">
              <input
                type="number"
                min="1"
                max={mockDriver.vehicle.seats}
                className="input-custom"
                value={offer.availableSeats}
                onChange={(e) => setOffer({
                  ...offer,
                  availableSeats: parseInt(e.target.value)
                })}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-700">Arrêts</h3>
            <button
              type="button"
              onClick={() => setShowStopForm(true)}
              className="flex items-center text-sm text-indigo-600 hover:text-indigo-700"
            >
              <Plus className="h-4 w-4 mr-1" />
              Ajouter un arrêt
            </button>
          </div>

          {showStopForm && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  className="input-custom"
                  placeholder="Adresse de l'arrêt"
                  value={newStop.address}
                  onChange={(e) => setNewStop({
                    ...newStop,
                    address: e.target.value
                  })}
                />
              </div>
              <div className="flex space-x-2">
                <input
                  type="time"
                  className="input-custom"
                  value={newStop.time}
                  onChange={(e) => setNewStop({
                    ...newStop,
                    time: e.target.value
                  })}
                />
                <button
                  type="button"
                  onClick={addStop}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Ajouter
                </button>
              </div>
            </div>
          )}

          {offer.stops.map((stop, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{stop.address}</p>
                <p className="text-sm text-gray-600">Arrêt prévu à {stop.time}</p>
              </div>
              <button
                type="button"
                onClick={() => setOffer({
                  ...offer,
                  stops: offer.stops.filter((_, i) => i !== index)
                })}
                className="text-red-600 hover:text-red-700"
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>

        <button type="submit" className="btn-primary">
          <Car className="h-5 w-5 mr-2" />
          Publier le trajet
        </button>
      </form>
    </div>
  );
}