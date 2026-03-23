export interface cleanupsvcEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cleanupsvcCreateParams4 { value: number; }
export interface cleanupsvcUpdateParams4 { id: number; newValue: number; }
export type cleanupsvcStatus4 = 'active' | 'inactive' | 'pending';
export interface cleanupsvcQueryResult4<T> { success: boolean; data?: T; error?: string; }
