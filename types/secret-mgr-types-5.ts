export interface secretmgrEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface secretmgrCreateParams5 { value: number; }
export interface secretmgrUpdateParams5 { id: number; newValue: number; }
export type secretmgrStatus5 = 'active' | 'inactive' | 'pending';
export interface secretmgrQueryResult5<T> { success: boolean; data?: T; error?: string; }
