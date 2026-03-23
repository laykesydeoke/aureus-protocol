export interface paginationEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface paginationCreateParams1 { value: number; }
export interface paginationUpdateParams1 { id: number; newValue: number; }
export type paginationStatus1 = 'active' | 'inactive' | 'pending';
export interface paginationQueryResult1<T> { success: boolean; data?: T; error?: string; }
