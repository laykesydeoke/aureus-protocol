export interface healthchkEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface healthchkCreateParams4 { value: number; }
export interface healthchkUpdateParams4 { id: number; newValue: number; }
export type healthchkStatus4 = 'active' | 'inactive' | 'pending';
export interface healthchkQueryResult4<T> { success: boolean; data?: T; error?: string; }
