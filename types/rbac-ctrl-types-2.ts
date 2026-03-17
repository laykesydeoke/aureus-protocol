export interface rbacctrlEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface rbacctrlCreateParams2 { value: number; }
export interface rbacctrlUpdateParams2 { id: number; newValue: number; }
export type rbacctrlStatus2 = 'active' | 'inactive' | 'pending';
export interface rbacctrlQueryResult2<T> { success: boolean; data?: T; error?: string; }
