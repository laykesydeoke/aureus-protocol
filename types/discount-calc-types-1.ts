export interface discountcalcEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface discountcalcCreateParams1 { value: number; }
export interface discountcalcUpdateParams1 { id: number; newValue: number; }
export type discountcalcStatus1 = 'active' | 'inactive' | 'pending';
export interface discountcalcQueryResult1<T> { success: boolean; data?: T; error?: string; }
