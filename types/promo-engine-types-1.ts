export interface promoengineEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface promoengineCreateParams1 { value: number; }
export interface promoengineUpdateParams1 { id: number; newValue: number; }
export type promoengineStatus1 = 'active' | 'inactive' | 'pending';
export interface promoengineQueryResult1<T> { success: boolean; data?: T; error?: string; }
