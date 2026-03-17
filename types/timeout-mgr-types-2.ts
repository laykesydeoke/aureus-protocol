export interface timeoutmgrEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface timeoutmgrCreateParams2 { value: number; }
export interface timeoutmgrUpdateParams2 { id: number; newValue: number; }
export type timeoutmgrStatus2 = 'active' | 'inactive' | 'pending';
export interface timeoutmgrQueryResult2<T> { success: boolean; data?: T; error?: string; }
