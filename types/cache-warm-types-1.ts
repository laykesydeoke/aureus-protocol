export interface cachewarmEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cachewarmCreateParams1 { value: number; }
export interface cachewarmUpdateParams1 { id: number; newValue: number; }
export type cachewarmStatus1 = 'active' | 'inactive' | 'pending';
export interface cachewarmQueryResult1<T> { success: boolean; data?: T; error?: string; }
