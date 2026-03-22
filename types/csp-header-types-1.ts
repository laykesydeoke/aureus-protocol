export interface cspheaderEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cspheaderCreateParams1 { value: number; }
export interface cspheaderUpdateParams1 { id: number; newValue: number; }
export type cspheaderStatus1 = 'active' | 'inactive' | 'pending';
export interface cspheaderQueryResult1<T> { success: boolean; data?: T; error?: string; }
