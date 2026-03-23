export interface compactsvcEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface compactsvcCreateParams4 { value: number; }
export interface compactsvcUpdateParams4 { id: number; newValue: number; }
export type compactsvcStatus4 = 'active' | 'inactive' | 'pending';
export interface compactsvcQueryResult4<T> { success: boolean; data?: T; error?: string; }
