export interface rbacctrlEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface rbacctrlCreateParams1 { value: number; }
export interface rbacctrlUpdateParams1 { id: number; newValue: number; }
export type rbacctrlStatus1 = 'active' | 'inactive' | 'pending';
export interface rbacctrlQueryResult1<T> { success: boolean; data?: T; error?: string; }
