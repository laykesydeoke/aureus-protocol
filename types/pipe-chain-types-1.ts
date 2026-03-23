export interface pipechainEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface pipechainCreateParams1 { value: number; }
export interface pipechainUpdateParams1 { id: number; newValue: number; }
export type pipechainStatus1 = 'active' | 'inactive' | 'pending';
export interface pipechainQueryResult1<T> { success: boolean; data?: T; error?: string; }
