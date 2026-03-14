export interface paginationEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface paginationCreateParams2 { value: number; }
export interface paginationUpdateParams2 { id: number; newValue: number; }
export type paginationStatus2 = 'active' | 'inactive' | 'pending';
export interface paginationQueryResult2<T> { success: boolean; data?: T; error?: string; }
