export interface corspolicyEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface corspolicyCreateParams1 { value: number; }
export interface corspolicyUpdateParams1 { id: number; newValue: number; }
export type corspolicyStatus1 = 'active' | 'inactive' | 'pending';
export interface corspolicyQueryResult1<T> { success: boolean; data?: T; error?: string; }
