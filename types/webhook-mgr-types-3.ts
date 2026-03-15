export interface webhookmgrEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface webhookmgrCreateParams3 { value: number; }
export interface webhookmgrUpdateParams3 { id: number; newValue: number; }
export type webhookmgrStatus3 = 'active' | 'inactive' | 'pending';
export interface webhookmgrQueryResult3<T> { success: boolean; data?: T; error?: string; }
