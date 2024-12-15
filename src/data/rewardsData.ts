import { RewardAction, Partnership, RewardTier } from '../types/rewards';

export const REWARD_TIERS: Record<RewardTier, {
  name: string;
  minSpend: number;
  discount: number;
  color: string;
}> = {
  bronze: {
    name: 'Bronze',
    minSpend: 0,
    discount: 0,
    color: '#CD7F32'
  },
  silver: {
    name: 'Argent',
    minSpend: 1000,
    discount: 5,
    color: '#C0C0C0'
  },
  gold: {
    name: 'Or',
    minSpend: 5000,
    discount: 10,
    color: '#FFD700'
  },
  platinum: {
    name: 'Platine',
    minSpend: 10000,
    discount: 15,
    color: '#E5E4E2'
  }
};

export const REWARD_ACTIONS: RewardAction[] = [
  {
    id: 'eco-delivery',
    name: 'Livraison écologique',
    description: 'Effectuez une livraison à pied ou à vélo',
    fretReward: 2,
    type: 'ecological',
    frequency: 'daily'
  },
  {
    id: 'beach-cleanup',
    name: 'Nettoyage des plages',
    description: 'Participez aux actions de nettoyage des plages',
    fretReward: 5,
    type: 'social',
    frequency: 'weekly'
  },
  {
    id: 'referral',
    name: 'Parrainage',
    description: 'Parrainez un nouveau membre',
    fretReward: 10,
    type: 'referral',
    frequency: 'once'
  }
];

export const PARTNERSHIP_PLANS: Partnership[] = [
  {
    id: 'starter',
    type: 'business',
    name: 'Starter',
    tier: 'bronze',
    benefits: [
      'Label Fretla Partner',
      'Visibilité sur l\'application',
      'Support dédié'
    ],
    monthlyFee: 49,
    fretBonus: 1.2,
    referralBonus: 5
  },
  {
    id: 'pro',
    type: 'business',
    name: 'Pro',
    tier: 'silver',
    benefits: [
      'Label Fretla Partner',
      'Visibilité premium',
      'Support prioritaire',
      'Dashboard analytics',
      'API access'
    ],
    monthlyFee: 99,
    fretBonus: 1.5,
    referralBonus: 10
  },
  {
    id: 'enterprise',
    type: 'business',
    name: 'Enterprise',
    tier: 'gold',
    benefits: [
      'Label Fretla Partner',
      'Visibilité premium+',
      'Support 24/7',
      'Dashboard analytics avancé',
      'API access illimité',
      'Account manager dédié'
    ],
    monthlyFee: 199,
    fretBonus: 2.0,
    referralBonus: 20
  }
];