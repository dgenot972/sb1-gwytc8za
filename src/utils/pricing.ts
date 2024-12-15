import { ShippingItem, PricingTier, PRICING_TIERS } from '../types/shipping';

export function calculateVolume(length: number, width: number, height: number): number {
  return (length * width * height) / 1000000; // Convert cm³ to m³
}

export function findPricingTier(weight: number, volume: number): PricingTier | undefined {
  return PRICING_TIERS.find(tier => 
    weight <= tier.maxWeight && volume <= tier.maxVolume
  );
}

export function calculatePrice(
  item: ShippingItem, 
  distance: number // km
): { price: number; tier: PricingTier | undefined } {
  const volume = calculateVolume(
    item.dimensions.length,
    item.dimensions.width,
    item.dimensions.height
  );

  const tier = findPricingTier(item.weight, volume);
  
  if (!tier) {
    throw new Error('Item exceeds maximum supported dimensions or weight');
  }

  let price = tier.basePrice + (distance * tier.pricePerKm);
  
  if (item.fragile) {
    price *= tier.fragileMultiplier;
  }

  if (item.value > 0) {
    price += item.value * tier.valueMultiplier;
  }

  return { price: Math.round(price * 100) / 100, tier };
}