export interface webhookmgrEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface webhookmgrCreateParams4 { value: number; }
export interface webhookmgrUpdateParams4 { id: number; newValue: number; }
export type webhookmgrStatus4 = 'active' | 'inactive' | 'pending';
export interface webhookmgrQueryResult4<T> { success: boolean; data?: T; error?: string; }
