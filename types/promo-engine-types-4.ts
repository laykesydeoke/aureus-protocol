export interface promoengineEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface promoengineCreateParams4 { value: number; }
export interface promoengineUpdateParams4 { id: number; newValue: number; }
export type promoengineStatus4 = 'active' | 'inactive' | 'pending';
export interface promoengineQueryResult4<T> { success: boolean; data?: T; error?: string; }
