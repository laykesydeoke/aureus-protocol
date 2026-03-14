export interface searchidxEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface searchidxCreateParams2 { value: number; }
export interface searchidxUpdateParams2 { id: number; newValue: number; }
export type searchidxStatus2 = 'active' | 'inactive' | 'pending';
export interface searchidxQueryResult2<T> { success: boolean; data?: T; error?: string; }
