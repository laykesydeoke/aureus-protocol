export interface healthchkEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface healthchkCreateParams1 { value: number; }
export interface healthchkUpdateParams1 { id: number; newValue: number; }
export type healthchkStatus1 = 'active' | 'inactive' | 'pending';
export interface healthchkQueryResult1<T> { success: boolean; data?: T; error?: string; }
