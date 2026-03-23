export interface cleanupsvcEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cleanupsvcCreateParams3 { value: number; }
export interface cleanupsvcUpdateParams3 { id: number; newValue: number; }
export type cleanupsvcStatus3 = 'active' | 'inactive' | 'pending';
export interface cleanupsvcQueryResult3<T> { success: boolean; data?: T; error?: string; }
