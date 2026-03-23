export interface aclengineEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface aclengineCreateParams1 { value: number; }
export interface aclengineUpdateParams1 { id: number; newValue: number; }
export type aclengineStatus1 = 'active' | 'inactive' | 'pending';
export interface aclengineQueryResult1<T> { success: boolean; data?: T; error?: string; }
