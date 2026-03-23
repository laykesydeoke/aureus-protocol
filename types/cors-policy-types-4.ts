export interface corspolicyEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface corspolicyCreateParams4 { value: number; }
export interface corspolicyUpdateParams4 { id: number; newValue: number; }
export type corspolicyStatus4 = 'active' | 'inactive' | 'pending';
export interface corspolicyQueryResult4<T> { success: boolean; data?: T; error?: string; }
