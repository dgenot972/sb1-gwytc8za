export interface Dimensions {
  length: number; // cm
  width: number;  // cm
  height: number; // cm
}

export interface ShippingItem {
  type: string;
  description: string;
  weight: number;    // kg
  dimensions: Dimensions;
  fragile: boolean;
  value: number;     // €
}

export interface PricingTier {
  maxWeight: number;
  maxVolume: number;
  basePrice: number;
  pricePerKm: number;
  fragileMultiplier: number;
  valueMultiplier: number;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    maxWeight: 5,
    maxVolume: 0.02,
    basePrice: 5,
    pricePerKm: 0.5,
    fragileMultiplier: 1.3,
    valueMultiplier: 0.001
  },
  {
    maxWeight: 20,
    maxVolume: 0.1,
    basePrice: 10,
    pricePerKm: 0.8,
    fragileMultiplier: 1.4,
    valueMultiplier: 0.002
  },
  {
    maxWeight: 50,
    maxVolume: 0.3,
    basePrice: 20,
    pricePerKm: 1.2,
    fragileMultiplier: 1.5,
    valueMultiplier: 0.003
  },
  {
    maxWeight: 200,
    maxVolume: 1.5,
    basePrice: 40,
    pricePerKm: 1.5,
    fragileMultiplier: 1.6,
    valueMultiplier: 0.004
  },
  {
    maxWeight: 800,
    maxVolume: 6,
    basePrice: 80,
    pricePerKm: 2,
    fragileMultiplier: 1.8,
    valueMultiplier: 0.005
  }
];