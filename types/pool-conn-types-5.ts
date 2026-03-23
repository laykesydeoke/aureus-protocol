export interface poolconnEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface poolconnCreateParams5 { value: number; }
export interface poolconnUpdateParams5 { id: number; newValue: number; }
export type poolconnStatus5 = 'active' | 'inactive' | 'pending';
export interface poolconnQueryResult5<T> { success: boolean; data?: T; error?: string; }
