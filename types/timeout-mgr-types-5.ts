export interface timeoutmgrEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface timeoutmgrCreateParams5 { value: number; }
export interface timeoutmgrUpdateParams5 { id: number; newValue: number; }
export type timeoutmgrStatus5 = 'active' | 'inactive' | 'pending';
export interface timeoutmgrQueryResult5<T> { success: boolean; data?: T; error?: string; }
