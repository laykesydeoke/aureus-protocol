export interface webhookmgrEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface webhookmgrCreateParams2 { value: number; }
export interface webhookmgrUpdateParams2 { id: number; newValue: number; }
export type webhookmgrStatus2 = 'active' | 'inactive' | 'pending';
export interface webhookmgrQueryResult2<T> { success: boolean; data?: T; error?: string; }
