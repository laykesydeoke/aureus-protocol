export interface restoreprocEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface restoreprocCreateParams2 { value: number; }
export interface restoreprocUpdateParams2 { id: number; newValue: number; }
export type restoreprocStatus2 = 'active' | 'inactive' | 'pending';
export interface restoreprocQueryResult2<T> { success: boolean; data?: T; error?: string; }
