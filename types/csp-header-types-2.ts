export interface cspheaderEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cspheaderCreateParams2 { value: number; }
export interface cspheaderUpdateParams2 { id: number; newValue: number; }
export type cspheaderStatus2 = 'active' | 'inactive' | 'pending';
export interface cspheaderQueryResult2<T> { success: boolean; data?: T; error?: string; }
