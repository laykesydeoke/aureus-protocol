export interface healthchkEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface healthchkCreateParams2 { value: number; }
export interface healthchkUpdateParams2 { id: number; newValue: number; }
export type healthchkStatus2 = 'active' | 'inactive' | 'pending';
export interface healthchkQueryResult2<T> { success: boolean; data?: T; error?: string; }
