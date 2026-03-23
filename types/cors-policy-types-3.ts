export interface corspolicyEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface corspolicyCreateParams3 { value: number; }
export interface corspolicyUpdateParams3 { id: number; newValue: number; }
export type corspolicyStatus3 = 'active' | 'inactive' | 'pending';
export interface corspolicyQueryResult3<T> { success: boolean; data?: T; error?: string; }
