export interface accessctrlEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface accessctrlCreateParams2 { value: number; }
export interface accessctrlUpdateParams2 { id: number; newValue: number; }
export type accessctrlStatus2 = 'active' | 'inactive' | 'pending';
export interface accessctrlQueryResult2<T> { success: boolean; data?: T; error?: string; }
