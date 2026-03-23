export interface webhookmgrEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface webhookmgrCreateParams5 { value: number; }
export interface webhookmgrUpdateParams5 { id: number; newValue: number; }
export type webhookmgrStatus5 = 'active' | 'inactive' | 'pending';
export interface webhookmgrQueryResult5<T> { success: boolean; data?: T; error?: string; }
