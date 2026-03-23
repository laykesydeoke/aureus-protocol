export interface cleanupsvcEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cleanupsvcCreateParams5 { value: number; }
export interface cleanupsvcUpdateParams5 { id: number; newValue: number; }
export type cleanupsvcStatus5 = 'active' | 'inactive' | 'pending';
export interface cleanupsvcQueryResult5<T> { success: boolean; data?: T; error?: string; }
