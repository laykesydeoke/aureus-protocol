export interface compactsvcEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface compactsvcCreateParams2 { value: number; }
export interface compactsvcUpdateParams2 { id: number; newValue: number; }
export type compactsvcStatus2 = 'active' | 'inactive' | 'pending';
export interface compactsvcQueryResult2<T> { success: boolean; data?: T; error?: string; }
