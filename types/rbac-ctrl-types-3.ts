export interface rbacctrlEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface rbacctrlCreateParams3 { value: number; }
export interface rbacctrlUpdateParams3 { id: number; newValue: number; }
export type rbacctrlStatus3 = 'active' | 'inactive' | 'pending';
export interface rbacctrlQueryResult3<T> { success: boolean; data?: T; error?: string; }
