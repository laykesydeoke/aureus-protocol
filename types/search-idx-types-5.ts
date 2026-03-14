export interface searchidxEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface searchidxCreateParams5 { value: number; }
export interface searchidxUpdateParams5 { id: number; newValue: number; }
export type searchidxStatus5 = 'active' | 'inactive' | 'pending';
export interface searchidxQueryResult5<T> { success: boolean; data?: T; error?: string; }
