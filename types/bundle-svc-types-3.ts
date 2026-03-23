export interface bundlesvcEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface bundlesvcCreateParams3 { value: number; }
export interface bundlesvcUpdateParams3 { id: number; newValue: number; }
export type bundlesvcStatus3 = 'active' | 'inactive' | 'pending';
export interface bundlesvcQueryResult3<T> { success: boolean; data?: T; error?: string; }
