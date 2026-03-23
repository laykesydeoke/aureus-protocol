export interface poolconnEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface poolconnCreateParams1 { value: number; }
export interface poolconnUpdateParams1 { id: number; newValue: number; }
export type poolconnStatus1 = 'active' | 'inactive' | 'pending';
export interface poolconnQueryResult1<T> { success: boolean; data?: T; error?: string; }
