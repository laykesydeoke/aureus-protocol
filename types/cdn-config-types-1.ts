export interface cdnconfigEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cdnconfigCreateParams1 { value: number; }
export interface cdnconfigUpdateParams1 { id: number; newValue: number; }
export type cdnconfigStatus1 = 'active' | 'inactive' | 'pending';
export interface cdnconfigQueryResult1<T> { success: boolean; data?: T; error?: string; }
