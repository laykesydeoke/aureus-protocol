export interface poolconnEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface poolconnCreateParams4 { value: number; }
export interface poolconnUpdateParams4 { id: number; newValue: number; }
export type poolconnStatus4 = 'active' | 'inactive' | 'pending';
export interface poolconnQueryResult4<T> { success: boolean; data?: T; error?: string; }
