export interface exportsvcEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface exportsvcCreateParams2 { value: number; }
export interface exportsvcUpdateParams2 { id: number; newValue: number; }
export type exportsvcStatus2 = 'active' | 'inactive' | 'pending';
export interface exportsvcQueryResult2<T> { success: boolean; data?: T; error?: string; }
