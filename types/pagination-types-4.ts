export interface paginationEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface paginationCreateParams4 { value: number; }
export interface paginationUpdateParams4 { id: number; newValue: number; }
export type paginationStatus4 = 'active' | 'inactive' | 'pending';
export interface paginationQueryResult4<T> { success: boolean; data?: T; error?: string; }
