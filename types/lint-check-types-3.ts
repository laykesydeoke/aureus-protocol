export interface lintcheckEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface lintcheckCreateParams3 { value: number; }
export interface lintcheckUpdateParams3 { id: number; newValue: number; }
export type lintcheckStatus3 = 'active' | 'inactive' | 'pending';
export interface lintcheckQueryResult3<T> { success: boolean; data?: T; error?: string; }
