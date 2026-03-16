export interface promoengineEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface promoengineCreateParams5 { value: number; }
export interface promoengineUpdateParams5 { id: number; newValue: number; }
export type promoengineStatus5 = 'active' | 'inactive' | 'pending';
export interface promoengineQueryResult5<T> { success: boolean; data?: T; error?: string; }
