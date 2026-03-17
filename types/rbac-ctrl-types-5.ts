export interface rbacctrlEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface rbacctrlCreateParams5 { value: number; }
export interface rbacctrlUpdateParams5 { id: number; newValue: number; }
export type rbacctrlStatus5 = 'active' | 'inactive' | 'pending';
export interface rbacctrlQueryResult5<T> { success: boolean; data?: T; error?: string; }
