export interface cachewarmEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cachewarmCreateParams3 { value: number; }
export interface cachewarmUpdateParams3 { id: number; newValue: number; }
export type cachewarmStatus3 = 'active' | 'inactive' | 'pending';
export interface cachewarmQueryResult3<T> { success: boolean; data?: T; error?: string; }
