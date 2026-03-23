export interface restoreprocEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface restoreprocCreateParams5 { value: number; }
export interface restoreprocUpdateParams5 { id: number; newValue: number; }
export type restoreprocStatus5 = 'active' | 'inactive' | 'pending';
export interface restoreprocQueryResult5<T> { success: boolean; data?: T; error?: string; }
