export interface aclengineEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface aclengineCreateParams5 { value: number; }
export interface aclengineUpdateParams5 { id: number; newValue: number; }
export type aclengineStatus5 = 'active' | 'inactive' | 'pending';
export interface aclengineQueryResult5<T> { success: boolean; data?: T; error?: string; }
