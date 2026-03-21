export interface lintcheckEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface lintcheckCreateParams4 { value: number; }
export interface lintcheckUpdateParams4 { id: number; newValue: number; }
export type lintcheckStatus4 = 'active' | 'inactive' | 'pending';
export interface lintcheckQueryResult4<T> { success: boolean; data?: T; error?: string; }
