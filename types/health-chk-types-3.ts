export interface healthchkEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface healthchkCreateParams3 { value: number; }
export interface healthchkUpdateParams3 { id: number; newValue: number; }
export type healthchkStatus3 = 'active' | 'inactive' | 'pending';
export interface healthchkQueryResult3<T> { success: boolean; data?: T; error?: string; }
