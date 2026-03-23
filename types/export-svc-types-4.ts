export interface exportsvcEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface exportsvcCreateParams4 { value: number; }
export interface exportsvcUpdateParams4 { id: number; newValue: number; }
export type exportsvcStatus4 = 'active' | 'inactive' | 'pending';
export interface exportsvcQueryResult4<T> { success: boolean; data?: T; error?: string; }
