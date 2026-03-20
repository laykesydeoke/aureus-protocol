export interface prefetchsvcEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface prefetchsvcCreateParams2 { value: number; }
export interface prefetchsvcUpdateParams2 { id: number; newValue: number; }
export type prefetchsvcStatus2 = 'active' | 'inactive' | 'pending';
export interface prefetchsvcQueryResult2<T> { success: boolean; data?: T; error?: string; }
