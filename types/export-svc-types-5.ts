export interface exportsvcEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface exportsvcCreateParams5 { value: number; }
export interface exportsvcUpdateParams5 { id: number; newValue: number; }
export type exportsvcStatus5 = 'active' | 'inactive' | 'pending';
export interface exportsvcQueryResult5<T> { success: boolean; data?: T; error?: string; }
