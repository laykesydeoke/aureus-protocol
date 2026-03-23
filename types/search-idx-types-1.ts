export interface searchidxEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface searchidxCreateParams1 { value: number; }
export interface searchidxUpdateParams1 { id: number; newValue: number; }
export type searchidxStatus1 = 'active' | 'inactive' | 'pending';
export interface searchidxQueryResult1<T> { success: boolean; data?: T; error?: string; }
