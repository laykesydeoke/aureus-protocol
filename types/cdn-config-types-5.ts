export interface cdnconfigEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cdnconfigCreateParams5 { value: number; }
export interface cdnconfigUpdateParams5 { id: number; newValue: number; }
export type cdnconfigStatus5 = 'active' | 'inactive' | 'pending';
export interface cdnconfigQueryResult5<T> { success: boolean; data?: T; error?: string; }
