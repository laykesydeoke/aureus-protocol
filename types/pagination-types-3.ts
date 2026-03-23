export interface paginationEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface paginationCreateParams3 { value: number; }
export interface paginationUpdateParams3 { id: number; newValue: number; }
export type paginationStatus3 = 'active' | 'inactive' | 'pending';
export interface paginationQueryResult3<T> { success: boolean; data?: T; error?: string; }
