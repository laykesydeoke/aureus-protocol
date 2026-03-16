export interface discountcalcEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface discountcalcCreateParams2 { value: number; }
export interface discountcalcUpdateParams2 { id: number; newValue: number; }
export type discountcalcStatus2 = 'active' | 'inactive' | 'pending';
export interface discountcalcQueryResult2<T> { success: boolean; data?: T; error?: string; }
