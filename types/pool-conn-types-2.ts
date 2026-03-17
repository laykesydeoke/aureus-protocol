export interface poolconnEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface poolconnCreateParams2 { value: number; }
export interface poolconnUpdateParams2 { id: number; newValue: number; }
export type poolconnStatus2 = 'active' | 'inactive' | 'pending';
export interface poolconnQueryResult2<T> { success: boolean; data?: T; error?: string; }
