import React from 'react';
import { MapView } from '../components/map/MapView';
import { ServiceSelector } from '../components/forms/ServiceSelector';

export function ReservationPage() {
  return (
    <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Réserver un transport</h1>
        <MapView />
        <div className="max-w-3xl mx-auto">
          <ServiceSelector onSelect={() => {}} />
        </div>
      </div>
    </main>
  );
}