export interface accessctrlEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface accessctrlCreateParams4 { value: number; }
export interface accessctrlUpdateParams4 { id: number; newValue: number; }
export type accessctrlStatus4 = 'active' | 'inactive' | 'pending';
export interface accessctrlQueryResult4<T> { success: boolean; data?: T; error?: string; }
