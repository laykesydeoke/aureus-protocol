export interface prefetchsvcEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface prefetchsvcCreateParams5 { value: number; }
export interface prefetchsvcUpdateParams5 { id: number; newValue: number; }
export type prefetchsvcStatus5 = 'active' | 'inactive' | 'pending';
export interface prefetchsvcQueryResult5<T> { success: boolean; data?: T; error?: string; }
