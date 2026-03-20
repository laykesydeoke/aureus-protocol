export interface prefetchsvcEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface prefetchsvcCreateParams1 { value: number; }
export interface prefetchsvcUpdateParams1 { id: number; newValue: number; }
export type prefetchsvcStatus1 = 'active' | 'inactive' | 'pending';
export interface prefetchsvcQueryResult1<T> { success: boolean; data?: T; error?: string; }
