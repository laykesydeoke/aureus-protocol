export interface discountcalcEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface discountcalcCreateParams3 { value: number; }
export interface discountcalcUpdateParams3 { id: number; newValue: number; }
export type discountcalcStatus3 = 'active' | 'inactive' | 'pending';
export interface discountcalcQueryResult3<T> { success: boolean; data?: T; error?: string; }
