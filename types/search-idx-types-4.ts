export interface searchidxEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface searchidxCreateParams4 { value: number; }
export interface searchidxUpdateParams4 { id: number; newValue: number; }
export type searchidxStatus4 = 'active' | 'inactive' | 'pending';
export interface searchidxQueryResult4<T> { success: boolean; data?: T; error?: string; }
