export interface cspheaderEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cspheaderCreateParams4 { value: number; }
export interface cspheaderUpdateParams4 { id: number; newValue: number; }
export type cspheaderStatus4 = 'active' | 'inactive' | 'pending';
export interface cspheaderQueryResult4<T> { success: boolean; data?: T; error?: string; }
