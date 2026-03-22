export interface secretmgrEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface secretmgrCreateParams1 { value: number; }
export interface secretmgrUpdateParams1 { id: number; newValue: number; }
export type secretmgrStatus1 = 'active' | 'inactive' | 'pending';
export interface secretmgrQueryResult1<T> { success: boolean; data?: T; error?: string; }
