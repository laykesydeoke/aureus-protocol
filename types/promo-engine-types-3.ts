export interface promoengineEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface promoengineCreateParams3 { value: number; }
export interface promoengineUpdateParams3 { id: number; newValue: number; }
export type promoengineStatus3 = 'active' | 'inactive' | 'pending';
export interface promoengineQueryResult3<T> { success: boolean; data?: T; error?: string; }
