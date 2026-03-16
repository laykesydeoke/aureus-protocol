export interface promoengineEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface promoengineCreateParams2 { value: number; }
export interface promoengineUpdateParams2 { id: number; newValue: number; }
export type promoengineStatus2 = 'active' | 'inactive' | 'pending';
export interface promoengineQueryResult2<T> { success: boolean; data?: T; error?: string; }
