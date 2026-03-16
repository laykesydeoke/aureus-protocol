export interface discountcalcEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface discountcalcCreateParams5 { value: number; }
export interface discountcalcUpdateParams5 { id: number; newValue: number; }
export type discountcalcStatus5 = 'active' | 'inactive' | 'pending';
export interface discountcalcQueryResult5<T> { success: boolean; data?: T; error?: string; }
