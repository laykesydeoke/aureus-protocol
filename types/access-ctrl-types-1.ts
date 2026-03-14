export interface accessctrlEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface accessctrlCreateParams1 { value: number; }
export interface accessctrlUpdateParams1 { id: number; newValue: number; }
export type accessctrlStatus1 = 'active' | 'inactive' | 'pending';
export interface accessctrlQueryResult1<T> { success: boolean; data?: T; error?: string; }
