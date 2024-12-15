import React from 'react';
import { Check, Calendar, MapPin, Package, ArrowRight } from 'lucide-react';
import { FretAmount } from '../currency/FretAmount';

interface ReservationConfirmationProps {
  reservation: {
    id: string;
    pickupAddress: string;
    deliveryAddress: string;
    date: string;
    time: string;
    serviceType: string;
    fretReward: number;
  };
  onClose: () => void;
}

export function ReservationConfirmation({ reservation, onClose }: ReservationConfirmationProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Réservation confirmée !
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Votre réservation a été enregistrée avec succès.
                    Numéro de réservation : {reservation.id}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4 border-t border-gray-200 pt-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-indigo-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Départ</p>
                  <p className="text-sm text-gray-500">{reservation.pickupAddress}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-indigo-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Arrivée</p>
                  <p className="text-sm text-gray-500">{reservation.deliveryAddress}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-indigo-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Date et heure</p>
                  <p className="text-sm text-gray-500">
                    {new Date(reservation.date).toLocaleDateString('fr-FR')} à {reservation.time}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Package className="h-5 w-5 text-indigo-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Service</p>
                  <p className="text-sm text-gray-500">{reservation.serviceType}</p>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-indigo-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-indigo-700">
                    Frets gagnés
                  </span>
                  <FretAmount amount={reservation.fretReward} showEuroEquivalent />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}