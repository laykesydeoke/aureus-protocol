export interface pipechainEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface pipechainCreateParams2 { value: number; }
export interface pipechainUpdateParams2 { id: number; newValue: number; }
export type pipechainStatus2 = 'active' | 'inactive' | 'pending';
export interface pipechainQueryResult2<T> { success: boolean; data?: T; error?: string; }
