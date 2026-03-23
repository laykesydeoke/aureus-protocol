export interface lintcheckEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface lintcheckCreateParams1 { value: number; }
export interface lintcheckUpdateParams1 { id: number; newValue: number; }
export type lintcheckStatus1 = 'active' | 'inactive' | 'pending';
export interface lintcheckQueryResult1<T> { success: boolean; data?: T; error?: string; }
