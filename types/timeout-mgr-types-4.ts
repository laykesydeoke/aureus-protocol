export interface timeoutmgrEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface timeoutmgrCreateParams4 { value: number; }
export interface timeoutmgrUpdateParams4 { id: number; newValue: number; }
export type timeoutmgrStatus4 = 'active' | 'inactive' | 'pending';
export interface timeoutmgrQueryResult4<T> { success: boolean; data?: T; error?: string; }
