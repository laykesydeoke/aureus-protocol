export interface restoreprocEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface restoreprocCreateParams4 { value: number; }
export interface restoreprocUpdateParams4 { id: number; newValue: number; }
export type restoreprocStatus4 = 'active' | 'inactive' | 'pending';
export interface restoreprocQueryResult4<T> { success: boolean; data?: T; error?: string; }
