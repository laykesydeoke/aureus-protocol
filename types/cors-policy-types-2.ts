export interface corspolicyEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface corspolicyCreateParams2 { value: number; }
export interface corspolicyUpdateParams2 { id: number; newValue: number; }
export type corspolicyStatus2 = 'active' | 'inactive' | 'pending';
export interface corspolicyQueryResult2<T> { success: boolean; data?: T; error?: string; }
