export interface compactsvcEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface compactsvcCreateParams3 { value: number; }
export interface compactsvcUpdateParams3 { id: number; newValue: number; }
export type compactsvcStatus3 = 'active' | 'inactive' | 'pending';
export interface compactsvcQueryResult3<T> { success: boolean; data?: T; error?: string; }
