export interface rbacctrlEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface rbacctrlCreateParams4 { value: number; }
export interface rbacctrlUpdateParams4 { id: number; newValue: number; }
export type rbacctrlStatus4 = 'active' | 'inactive' | 'pending';
export interface rbacctrlQueryResult4<T> { success: boolean; data?: T; error?: string; }
