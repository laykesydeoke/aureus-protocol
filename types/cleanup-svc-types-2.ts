export interface cleanupsvcEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cleanupsvcCreateParams2 { value: number; }
export interface cleanupsvcUpdateParams2 { id: number; newValue: number; }
export type cleanupsvcStatus2 = 'active' | 'inactive' | 'pending';
export interface cleanupsvcQueryResult2<T> { success: boolean; data?: T; error?: string; }
