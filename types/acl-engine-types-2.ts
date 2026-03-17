export interface aclengineEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface aclengineCreateParams2 { value: number; }
export interface aclengineUpdateParams2 { id: number; newValue: number; }
export type aclengineStatus2 = 'active' | 'inactive' | 'pending';
export interface aclengineQueryResult2<T> { success: boolean; data?: T; error?: string; }
