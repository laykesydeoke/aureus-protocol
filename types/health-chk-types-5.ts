export interface healthchkEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface healthchkCreateParams5 { value: number; }
export interface healthchkUpdateParams5 { id: number; newValue: number; }
export type healthchkStatus5 = 'active' | 'inactive' | 'pending';
export interface healthchkQueryResult5<T> { success: boolean; data?: T; error?: string; }
