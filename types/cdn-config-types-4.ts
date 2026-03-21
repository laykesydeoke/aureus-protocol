export interface cdnconfigEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cdnconfigCreateParams4 { value: number; }
export interface cdnconfigUpdateParams4 { id: number; newValue: number; }
export type cdnconfigStatus4 = 'active' | 'inactive' | 'pending';
export interface cdnconfigQueryResult4<T> { success: boolean; data?: T; error?: string; }
