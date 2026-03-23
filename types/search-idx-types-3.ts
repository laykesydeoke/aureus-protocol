export interface searchidxEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface searchidxCreateParams3 { value: number; }
export interface searchidxUpdateParams3 { id: number; newValue: number; }
export type searchidxStatus3 = 'active' | 'inactive' | 'pending';
export interface searchidxQueryResult3<T> { success: boolean; data?: T; error?: string; }
