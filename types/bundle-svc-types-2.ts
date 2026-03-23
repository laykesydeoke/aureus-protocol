export interface bundlesvcEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface bundlesvcCreateParams2 { value: number; }
export interface bundlesvcUpdateParams2 { id: number; newValue: number; }
export type bundlesvcStatus2 = 'active' | 'inactive' | 'pending';
export interface bundlesvcQueryResult2<T> { success: boolean; data?: T; error?: string; }
