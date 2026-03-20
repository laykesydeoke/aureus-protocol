export interface cachewarmEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cachewarmCreateParams5 { value: number; }
export interface cachewarmUpdateParams5 { id: number; newValue: number; }
export type cachewarmStatus5 = 'active' | 'inactive' | 'pending';
export interface cachewarmQueryResult5<T> { success: boolean; data?: T; error?: string; }
