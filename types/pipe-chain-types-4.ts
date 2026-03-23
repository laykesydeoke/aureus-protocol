export interface pipechainEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface pipechainCreateParams4 { value: number; }
export interface pipechainUpdateParams4 { id: number; newValue: number; }
export type pipechainStatus4 = 'active' | 'inactive' | 'pending';
export interface pipechainQueryResult4<T> { success: boolean; data?: T; error?: string; }
