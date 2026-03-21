export interface testrunnerEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface testrunnerCreateParams3 { value: number; }
export interface testrunnerUpdateParams3 { id: number; newValue: number; }
export type testrunnerStatus3 = 'active' | 'inactive' | 'pending';
export interface testrunnerQueryResult3<T> { success: boolean; data?: T; error?: string; }
