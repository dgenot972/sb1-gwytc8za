import React from 'react';
import { FreterRegistrationForm } from '../components/freter/FreterRegistrationForm';

export function FreterPage() {
  return (
    <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FreterRegistrationForm />
      </div>
    </main>
  );
}