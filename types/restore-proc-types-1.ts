export interface restoreprocEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface restoreprocCreateParams1 { value: number; }
export interface restoreprocUpdateParams1 { id: number; newValue: number; }
export type restoreprocStatus1 = 'active' | 'inactive' | 'pending';
export interface restoreprocQueryResult1<T> { success: boolean; data?: T; error?: string; }
