export interface prefetchsvcEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface prefetchsvcCreateParams4 { value: number; }
export interface prefetchsvcUpdateParams4 { id: number; newValue: number; }
export type prefetchsvcStatus4 = 'active' | 'inactive' | 'pending';
export interface prefetchsvcQueryResult4<T> { success: boolean; data?: T; error?: string; }
