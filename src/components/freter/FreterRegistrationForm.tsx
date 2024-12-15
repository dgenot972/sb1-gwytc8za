import React, { useState } from 'react';
import { Shield, Upload, ChevronLeft, ChevronRight } from 'lucide-react';
import { VehicleTypeConfig, VEHICLE_TYPES } from '../../types/vehicle';
import { FretReward } from '../currency/FretReward';

interface FreterFormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  birthDate: string;

  // Vehicle Information
  vehicleType: string;
  licensePlate?: string;
  vehicleYear?: string;
  vehicleBrand?: string;
  vehicleModel?: string;

  // Documents
  identityCard: File | null;
  drivingLicense: File | null;
  insurance: File | null;
  vehicleRegistration: File | null;
  professionalCard?: File | null;
  chronoCard?: File | null;
}

const initialFormData: FreterFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  birthDate: '',
  vehicleType: '',
  licensePlate: '',
  vehicleYear: '',
  vehicleBrand: '',
  vehicleModel: '',
  identityCard: null,
  drivingLicense: null,
  insurance: null,
  vehicleRegistration: null,
  professionalCard: null,
  chronoCard: null,
};

export function FreterRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FreterFormData>(initialFormData);
  const [selectedVehicleType, setSelectedVehicleType] = useState<VehicleTypeConfig | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof FreterFormData) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, [fieldName]: file }));
  };

  const handleVehicleTypeSelect = (type: VehicleTypeConfig) => {
    setSelectedVehicleType(type);
    setFormData(prev => ({ ...prev, vehicleType: type.id }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Informations personnelles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Prénom</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 input-custom"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-1 input-custom"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 input-custom"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Téléphone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1 input-custom"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Adresse</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="mt-1 input-custom"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Date de naissance</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
            className="mt-1 input-custom"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Type de véhicule</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {VEHICLE_TYPES.map((type) => (
          <button
            key={type.id}
            onClick={() => handleVehicleTypeSelect(type)}
            className={`p-6 rounded-xl border-2 transition-all text-left ${
              selectedVehicleType?.id === type.id
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-300'
            }`}
          >
            <h4 className="text-lg font-semibold mb-2">{type.name}</h4>
            <p className="text-sm text-gray-600 mb-4">{type.description}</p>
            <div className="space-y-2">
              <div className="text-sm">
                <span className="font-medium">Capacité max :</span>
                <ul className="mt-1 space-y-1">
                  <li>• {type.maxWeight} kg</li>
                  <li>• {type.maxVolume} m³</li>
                </ul>
              </div>
              <FretReward rewardPerKm={type.fretReward} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Documents requis</h3>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Documents d'identité</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Pièce d'identité</label>
                <input
                  type="file"
                  onChange={(e) => handleFileUpload(e, 'identityCard')}
                  accept="image/*,.pdf"
                  className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-indigo-50 file:text-indigo-700
                    hover:file:bg-indigo-100"
                />
              </div>
              {selectedVehicleType?.id !== 'pedestrian' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Permis de conduire</label>
                  <input
                    type="file"
                    onChange={(e) => handleFileUpload(e, 'drivingLicense')}
                    accept="image/*,.pdf"
                    className="mt-1 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-indigo-50 file:text-indigo-700
                      hover:file:bg-indigo-100"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Documents d'assurance</h4>
            <div>
              <label className="block text-sm font-medium text-gray-700">Attestation d'assurance</label>
              <input
                type="file"
                onChange={(e) => handleFileUpload(e, 'insurance')}
                accept="image/*,.pdf"
                className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
              />
            </div>
          </div>

          {selectedVehicleType && ['car', 'van', 'truck'].includes(selectedVehicleType.id) && (
            <div className="space-y-4 md:col-span-2">
              <h4 className="font-medium text-gray-900">Documents du véhicule</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Carte grise</label>
                  <input
                    type="file"
                    onChange={(e) => handleFileUpload(e, 'vehicleRegistration')}
                    accept="image/*,.pdf"
                    className="mt-1 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-indigo-50 file:text-indigo-700
                      hover:file:bg-indigo-100"
                  />
                </div>
                {selectedVehicleType.id === 'truck' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Carte chronotachygraphe</label>
                    <input
                      type="file"
                      onChange={(e) => handleFileUpload(e, 'chronoCard')}
                      accept="image/*,.pdf"
                      className="mt-1 block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-indigo-50 file:text-indigo-700
                        hover:file:bg-indigo-100"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-xl p-8">
      <div className="flex items-center mb-8">
        <Shield className="h-8 w-8 text-indigo-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">
          Devenir Freter
        </h2>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`
                flex items-center justify-center w-10 h-10 rounded-full
                ${currentStep >= step ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'}
              `}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-24 h-1 mx-2 ${
                  currentStep > step ? 'bg-indigo-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-sm font-medium">Informations</span>
          <span className="text-sm font-medium">Véhicule</span>
          <span className="text-sm font-medium">Documents</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}

        <div className="flex justify-between pt-6 border-t">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Précédent
            </button>
          )}
          
          {currentStep < 3 ? (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep + 1)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-auto"
            >
              Suivant
              <ChevronRight className="h-5 w-5 ml-2" />
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-auto"
            >
              <Upload className="h-5 w-5 mr-2" />
              Soumettre ma candidature
            </button>
          )}
        </div>
      </form>
    </div>
  );
}