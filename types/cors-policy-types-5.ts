export interface corspolicyEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface corspolicyCreateParams5 { value: number; }
export interface corspolicyUpdateParams5 { id: number; newValue: number; }
export type corspolicyStatus5 = 'active' | 'inactive' | 'pending';
export interface corspolicyQueryResult5<T> { success: boolean; data?: T; error?: string; }
