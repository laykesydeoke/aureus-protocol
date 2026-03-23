export interface timeoutmgrEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface timeoutmgrCreateParams1 { value: number; }
export interface timeoutmgrUpdateParams1 { id: number; newValue: number; }
export type timeoutmgrStatus1 = 'active' | 'inactive' | 'pending';
export interface timeoutmgrQueryResult1<T> { success: boolean; data?: T; error?: string; }
