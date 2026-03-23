export interface cspheaderEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cspheaderCreateParams3 { value: number; }
export interface cspheaderUpdateParams3 { id: number; newValue: number; }
export type cspheaderStatus3 = 'active' | 'inactive' | 'pending';
export interface cspheaderQueryResult3<T> { success: boolean; data?: T; error?: string; }
