export type VehicleType = 'pedestrian' | 'bike' | 'scooter' | 'car' | 'van' | 'truck';

export interface VehicleTypeConfig {
  id: VehicleType;
  name: string;
  maxWeight: number; // en kg
  maxVolume: number; // en m3
  description: string;
  requirements: string[];
  insuranceLevel: 'basic' | 'medium' | 'premium';
  fretReward: number; // Frets gagnés par km
}

export const VEHICLE_TYPES: VehicleTypeConfig[] = [
  {
    id: 'pedestrian',
    name: 'Piéton',
    maxWeight: 5,
    maxVolume: 0.02,
    description: 'Pour les petites livraisons écologiques à pied',
    requirements: [
      'Pièce d\'identité',
      'Justificatif de domicile',
      'Assurance responsabilité civile'
    ],
    insuranceLevel: 'basic',
    fretReward: 2 // 2 Frets par km
  },
  {
    id: 'bike',
    name: 'Vélo',
    maxWeight: 20,
    maxVolume: 0.1,
    description: 'Pour les livraisons écologiques',
    requirements: [
      'Vélo en bon état',
      'Équipement de sécurité',
      'Assurance responsabilité civile'
    ],
    insuranceLevel: 'basic',
    fretReward: 1.5 // 1.5 Frets par km
  },
  {
    id: 'scooter',
    name: 'Scooter',
    maxWeight: 50,
    maxVolume: 0.3,
    description: 'Pour les livraisons rapides et urgentes',
    requirements: [
      'Permis AM',
      'Assurance deux-roues',
      'Scooter de moins de 5 ans'
    ],
    insuranceLevel: 'basic',
    fretReward: 1 // 1 Fret par km
  },
  {
    id: 'car',
    name: 'Voiture',
    maxWeight: 200,
    maxVolume: 1.5,
    description: 'Pour le covoiturage et petites livraisons',
    requirements: [
      'Permis B',
      'Assurance personnelle',
      'Véhicule de moins de 10 ans'
    ],
    insuranceLevel: 'basic',
    fretReward: 0.8 // 0.8 Frets par km
  },
  {
    id: 'van',
    name: 'Utilitaire',
    maxWeight: 800,
    maxVolume: 6,
    description: 'Pour les livraisons moyennes et déménagements',
    requirements: [
      'Permis B',
      'Assurance professionnelle',
      'Véhicule de moins de 8 ans',
      'Carte professionnelle'
    ],
    insuranceLevel: 'medium',
    fretReward: 0.6 // 0.6 Frets par km
  },
  {
    id: 'truck',
    name: 'Camion',
    maxWeight: 3500,
    maxVolume: 20,
    description: 'Pour les grandes livraisons et déménagements',
    requirements: [
      'Permis C',
      'Assurance transport professionnel',
      'FIMO/FCO à jour',
      'Carte chronotachygraphe'
    ],
    insuranceLevel: 'premium',
    fretReward: 0.5 // 0.5 Frets par km
  }
];