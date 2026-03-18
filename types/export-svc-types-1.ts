export interface exportsvcEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface exportsvcCreateParams1 { value: number; }
export interface exportsvcUpdateParams1 { id: number; newValue: number; }
export type exportsvcStatus1 = 'active' | 'inactive' | 'pending';
export interface exportsvcQueryResult1<T> { success: boolean; data?: T; error?: string; }
