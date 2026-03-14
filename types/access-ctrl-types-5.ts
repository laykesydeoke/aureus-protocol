export interface accessctrlEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface accessctrlCreateParams5 { value: number; }
export interface accessctrlUpdateParams5 { id: number; newValue: number; }
export type accessctrlStatus5 = 'active' | 'inactive' | 'pending';
export interface accessctrlQueryResult5<T> { success: boolean; data?: T; error?: string; }
