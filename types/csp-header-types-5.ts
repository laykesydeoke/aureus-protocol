export interface cspheaderEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cspheaderCreateParams5 { value: number; }
export interface cspheaderUpdateParams5 { id: number; newValue: number; }
export type cspheaderStatus5 = 'active' | 'inactive' | 'pending';
export interface cspheaderQueryResult5<T> { success: boolean; data?: T; error?: string; }
