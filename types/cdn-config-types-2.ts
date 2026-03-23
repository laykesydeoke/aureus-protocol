export interface cdnconfigEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cdnconfigCreateParams2 { value: number; }
export interface cdnconfigUpdateParams2 { id: number; newValue: number; }
export type cdnconfigStatus2 = 'active' | 'inactive' | 'pending';
export interface cdnconfigQueryResult2<T> { success: boolean; data?: T; error?: string; }
