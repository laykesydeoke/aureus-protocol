export interface poolconnEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface poolconnCreateParams3 { value: number; }
export interface poolconnUpdateParams3 { id: number; newValue: number; }
export type poolconnStatus3 = 'active' | 'inactive' | 'pending';
export interface poolconnQueryResult3<T> { success: boolean; data?: T; error?: string; }
