export interface compactsvcEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface compactsvcCreateParams1 { value: number; }
export interface compactsvcUpdateParams1 { id: number; newValue: number; }
export type compactsvcStatus1 = 'active' | 'inactive' | 'pending';
export interface compactsvcQueryResult1<T> { success: boolean; data?: T; error?: string; }
