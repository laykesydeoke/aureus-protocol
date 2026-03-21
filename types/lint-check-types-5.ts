export interface lintcheckEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface lintcheckCreateParams5 { value: number; }
export interface lintcheckUpdateParams5 { id: number; newValue: number; }
export type lintcheckStatus5 = 'active' | 'inactive' | 'pending';
export interface lintcheckQueryResult5<T> { success: boolean; data?: T; error?: string; }
