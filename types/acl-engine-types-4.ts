export interface aclengineEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface aclengineCreateParams4 { value: number; }
export interface aclengineUpdateParams4 { id: number; newValue: number; }
export type aclengineStatus4 = 'active' | 'inactive' | 'pending';
export interface aclengineQueryResult4<T> { success: boolean; data?: T; error?: string; }
