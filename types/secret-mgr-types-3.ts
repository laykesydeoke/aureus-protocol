export interface secretmgrEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface secretmgrCreateParams3 { value: number; }
export interface secretmgrUpdateParams3 { id: number; newValue: number; }
export type secretmgrStatus3 = 'active' | 'inactive' | 'pending';
export interface secretmgrQueryResult3<T> { success: boolean; data?: T; error?: string; }
