export interface RideRequest {
  id: string;
  departure: {
    address: string;
    lat: number;
    lng: number;
  };
  destination: {
    address: string;
    lat: number;
    lng: number;
  };
  date: string;
  time: string;
  passengers: number;
  luggage: {
    small: number;
    large: number;
  };
  preferences: {
    smoking: boolean;
    animals: boolean;
    music: boolean;
  };
  notes?: string;
}

export interface Driver {
  id: string;
  vehicle: {
    type: 'car' | 'van';
    brand: string;
    model: string;
    year: number;
    color: string;
    seats: number;
    comfort: 'basic' | 'comfort' | 'luxury';
  };
  preferences: {
    smoking: boolean;
    animals: boolean;
    music: boolean;
  };
  rating: number;
  completedRides: number;
}

export interface RideOffer extends RideRequest {
  driver: Driver;
  pricePerSeat: number;
  availableSeats: number;
  stops: Array<{
    address: string;
    lat: number;
    lng: number;
    time: string;
  }>;
  status: 'pending' | 'confirmed' | 'in-progress' | 'completed';
}