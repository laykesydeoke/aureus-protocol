export interface accessctrlEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface accessctrlCreateParams3 { value: number; }
export interface accessctrlUpdateParams3 { id: number; newValue: number; }
export type accessctrlStatus3 = 'active' | 'inactive' | 'pending';
export interface accessctrlQueryResult3<T> { success: boolean; data?: T; error?: string; }
