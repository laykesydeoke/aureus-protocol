export interface timeoutmgrEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface timeoutmgrCreateParams3 { value: number; }
export interface timeoutmgrUpdateParams3 { id: number; newValue: number; }
export type timeoutmgrStatus3 = 'active' | 'inactive' | 'pending';
export interface timeoutmgrQueryResult3<T> { success: boolean; data?: T; error?: string; }
