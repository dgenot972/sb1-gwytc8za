export type RewardTier = 'bronze' | 'silver' | 'gold' | 'platinum';
export type PartnershipType = 'business' | 'association' | 'institution';

export interface RewardAction {
  id: string;
  name: string;
  description: string;
  fretReward: number;
  type: 'social' | 'ecological' | 'referral';
  frequency: 'once' | 'daily' | 'weekly' | 'monthly';
}

export interface Partnership {
  id: string;
  type: PartnershipType;
  name: string;
  tier: RewardTier;
  benefits: string[];
  monthlyFee: number;
  fretBonus: number;
  referralBonus: number;
}

export interface SocialAction {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  fretReward: number;
  participantsCount: number;
  maxParticipants?: number;
  partners: string[];
  type: 'cleanup' | 'community' | 'education' | 'other';
}