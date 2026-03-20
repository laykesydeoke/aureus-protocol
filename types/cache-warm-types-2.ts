export interface cachewarmEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cachewarmCreateParams2 { value: number; }
export interface cachewarmUpdateParams2 { id: number; newValue: number; }
export type cachewarmStatus2 = 'active' | 'inactive' | 'pending';
export interface cachewarmQueryResult2<T> { success: boolean; data?: T; error?: string; }
