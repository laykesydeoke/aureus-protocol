export interface lintcheckEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface lintcheckCreateParams2 { value: number; }
export interface lintcheckUpdateParams2 { id: number; newValue: number; }
export type lintcheckStatus2 = 'active' | 'inactive' | 'pending';
export interface lintcheckQueryResult2<T> { success: boolean; data?: T; error?: string; }
