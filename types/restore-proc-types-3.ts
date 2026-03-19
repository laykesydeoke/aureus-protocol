export interface restoreprocEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface restoreprocCreateParams3 { value: number; }
export interface restoreprocUpdateParams3 { id: number; newValue: number; }
export type restoreprocStatus3 = 'active' | 'inactive' | 'pending';
export interface restoreprocQueryResult3<T> { success: boolean; data?: T; error?: string; }
