export interface cachewarmEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cachewarmCreateParams4 { value: number; }
export interface cachewarmUpdateParams4 { id: number; newValue: number; }
export type cachewarmStatus4 = 'active' | 'inactive' | 'pending';
export interface cachewarmQueryResult4<T> { success: boolean; data?: T; error?: string; }
