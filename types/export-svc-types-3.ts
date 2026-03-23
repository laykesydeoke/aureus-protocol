export interface exportsvcEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface exportsvcCreateParams3 { value: number; }
export interface exportsvcUpdateParams3 { id: number; newValue: number; }
export type exportsvcStatus3 = 'active' | 'inactive' | 'pending';
export interface exportsvcQueryResult3<T> { success: boolean; data?: T; error?: string; }
