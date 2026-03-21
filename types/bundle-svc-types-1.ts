export interface bundlesvcEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface bundlesvcCreateParams1 { value: number; }
export interface bundlesvcUpdateParams1 { id: number; newValue: number; }
export type bundlesvcStatus1 = 'active' | 'inactive' | 'pending';
export interface bundlesvcQueryResult1<T> { success: boolean; data?: T; error?: string; }
