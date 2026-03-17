export interface aclengineEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface aclengineCreateParams3 { value: number; }
export interface aclengineUpdateParams3 { id: number; newValue: number; }
export type aclengineStatus3 = 'active' | 'inactive' | 'pending';
export interface aclengineQueryResult3<T> { success: boolean; data?: T; error?: string; }
