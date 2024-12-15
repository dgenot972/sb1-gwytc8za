import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Package } from 'lucide-react';
import { ServiceSelector } from './ServiceSelector';
import { RideShareForm } from './RideShareForm';
import { ReservationConfirmation } from '../confirmation/ReservationConfirmation';

interface ShipmentFormData {
  serviceType: string;
  pickupAddress: string;
  deliveryAddress: string;
  date: string;
  time: string;
  volume: string;
  weight: string;
  description: string;
}

export function ShipmentForm() {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState<ShipmentFormData>({
    serviceType: '',
    pickupAddress: '',
    deliveryAddress: '',
    date: '',
    time: '',
    volume: '',
    weight: '',
    description: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [reservation, setReservation] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    const mockReservation = {
      id: `RES-${Math.random().toString(36).substr(2, 9)}`,
      ...formData,
      fretReward: 2.5 // Mock reward amount
    };
    setReservation(mockReservation);
    setShowConfirmation(true);
  };

  if (showConfirmation && reservation) {
    return (
      <ReservationConfirmation
        reservation={reservation}
        onClose={() => {
          setShowConfirmation(false);
          setFormData({
            serviceType: '',
            pickupAddress: '',
            deliveryAddress: '',
            date: '',
            time: '',
            volume: '',
            weight: '',
            description: ''
          });
        }}
      />
    );
  }

  if (selectedService === 'rideshare') {
    return <RideShareForm />;
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Réserver votre transport</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <ServiceSelector 
          onSelect={(serviceType) => {
            setSelectedService(serviceType);
            setFormData({...formData, serviceType});
          }} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="animate-slide-in" style={{animationDelay: '0.1s'}}>
            <label className="block text-sm font-medium text-gray-700">Adresse de départ</label>
            <div className="mt-1 relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
              <input
                type="text"
                className="input-custom"
                placeholder="Saisissez l'adresse de départ"
                value={formData.pickupAddress}
                onChange={(e) => setFormData({...formData, pickupAddress: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="animate-slide-in" style={{animationDelay: '0.2s'}}>
            <label className="block text-sm font-medium text-gray-700">Adresse d'arrivée</label>
            <div className="mt-1 relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
              <input
                type="text"
                className="input-custom"
                placeholder="Saisissez l'adresse d'arrivée"
                value={formData.deliveryAddress}
                onChange={(e) => setFormData({...formData, deliveryAddress: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="animate-slide-in" style={{animationDelay: '0.3s'}}>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <div className="mt-1 relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
              <input
                type="date"
                className="input-custom"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="animate-slide-in" style={{animationDelay: '0.4s'}}>
            <label className="block text-sm font-medium text-gray-700">Heure</label>
            <div className="mt-1 relative">
              <Clock className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
              <input
                type="time"
                className="input-custom"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                required
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn-primary">
          <Package className="h-5 w-5 mr-2" />
          Réserver maintenant
        </button>
      </form>
    </div>
  );
}