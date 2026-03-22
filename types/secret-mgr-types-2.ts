export interface secretmgrEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface secretmgrCreateParams2 { value: number; }
export interface secretmgrUpdateParams2 { id: number; newValue: number; }
export type secretmgrStatus2 = 'active' | 'inactive' | 'pending';
export interface secretmgrQueryResult2<T> { success: boolean; data?: T; error?: string; }
