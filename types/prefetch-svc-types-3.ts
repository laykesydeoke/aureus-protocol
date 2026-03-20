export interface prefetchsvcEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface prefetchsvcCreateParams3 { value: number; }
export interface prefetchsvcUpdateParams3 { id: number; newValue: number; }
export type prefetchsvcStatus3 = 'active' | 'inactive' | 'pending';
export interface prefetchsvcQueryResult3<T> { success: boolean; data?: T; error?: string; }
