export interface secretmgrEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface secretmgrCreateParams4 { value: number; }
export interface secretmgrUpdateParams4 { id: number; newValue: number; }
export type secretmgrStatus4 = 'active' | 'inactive' | 'pending';
export interface secretmgrQueryResult4<T> { success: boolean; data?: T; error?: string; }
