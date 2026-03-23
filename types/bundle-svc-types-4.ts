export interface bundlesvcEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface bundlesvcCreateParams4 { value: number; }
export interface bundlesvcUpdateParams4 { id: number; newValue: number; }
export type bundlesvcStatus4 = 'active' | 'inactive' | 'pending';
export interface bundlesvcQueryResult4<T> { success: boolean; data?: T; error?: string; }
