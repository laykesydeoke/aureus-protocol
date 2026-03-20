export interface pipechainEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface pipechainCreateParams3 { value: number; }
export interface pipechainUpdateParams3 { id: number; newValue: number; }
export type pipechainStatus3 = 'active' | 'inactive' | 'pending';
export interface pipechainQueryResult3<T> { success: boolean; data?: T; error?: string; }
