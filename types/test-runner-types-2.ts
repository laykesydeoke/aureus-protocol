export interface testrunnerEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface testrunnerCreateParams2 { value: number; }
export interface testrunnerUpdateParams2 { id: number; newValue: number; }
export type testrunnerStatus2 = 'active' | 'inactive' | 'pending';
export interface testrunnerQueryResult2<T> { success: boolean; data?: T; error?: string; }
