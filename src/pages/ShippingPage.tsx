import React from 'react';
import { ShipmentForm } from '../components/forms/ShipmentForm';

export function ShippingPage() {
  return (
    <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <ShipmentForm />
      </div>
    </main>
  );
}