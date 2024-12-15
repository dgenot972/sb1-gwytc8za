import React, { useState } from 'react';
import { Users, Car } from 'lucide-react';
import { PassengerRequestForm } from '../components/rideshare/PassengerRequestForm';
import { DriverOfferForm } from '../components/rideshare/DriverOfferForm';

export function RidesharePage() {
  const [mode, setMode] = useState<'passenger' | 'driver'>('passenger');

  return (
    <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg p-1 bg-gray-100">
            <button
              onClick={() => setMode('passenger')}
              className={`flex items-center px-4 py-2 rounded-md ${
                mode === 'passenger'
                  ? 'bg-white shadow-sm text-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Users className="h-5 w-5 mr-2" />
              Passager
            </button>
            <button
              onClick={() => setMode('driver')}
              className={`flex items-center px-4 py-2 rounded-md ${
                mode === 'driver'
                  ? 'bg-white shadow-sm text-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Car className="h-5 w-5 mr-2" />
              Conducteur
            </button>
          </div>
        </div>

        {mode === 'passenger' ? <PassengerRequestForm /> : <DriverOfferForm />}
      </div>
    </main>
  );
}