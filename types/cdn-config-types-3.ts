export interface cdnconfigEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cdnconfigCreateParams3 { value: number; }
export interface cdnconfigUpdateParams3 { id: number; newValue: number; }
export type cdnconfigStatus3 = 'active' | 'inactive' | 'pending';
export interface cdnconfigQueryResult3<T> { success: boolean; data?: T; error?: string; }
