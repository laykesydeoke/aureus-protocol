export interface pipechainEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface pipechainCreateParams5 { value: number; }
export interface pipechainUpdateParams5 { id: number; newValue: number; }
export type pipechainStatus5 = 'active' | 'inactive' | 'pending';
export interface pipechainQueryResult5<T> { success: boolean; data?: T; error?: string; }
