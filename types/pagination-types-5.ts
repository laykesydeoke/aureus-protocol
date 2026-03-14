export interface paginationEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface paginationCreateParams5 { value: number; }
export interface paginationUpdateParams5 { id: number; newValue: number; }
export type paginationStatus5 = 'active' | 'inactive' | 'pending';
export interface paginationQueryResult5<T> { success: boolean; data?: T; error?: string; }
