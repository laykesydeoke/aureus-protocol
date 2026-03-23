export interface discountcalcEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface discountcalcCreateParams4 { value: number; }
export interface discountcalcUpdateParams4 { id: number; newValue: number; }
export type discountcalcStatus4 = 'active' | 'inactive' | 'pending';
export interface discountcalcQueryResult4<T> { success: boolean; data?: T; error?: string; }
