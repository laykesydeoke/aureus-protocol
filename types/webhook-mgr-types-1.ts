export interface webhookmgrEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface webhookmgrCreateParams1 { value: number; }
export interface webhookmgrUpdateParams1 { id: number; newValue: number; }
export type webhookmgrStatus1 = 'active' | 'inactive' | 'pending';
export interface webhookmgrQueryResult1<T> { success: boolean; data?: T; error?: string; }
