export interface testrunnerEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface testrunnerCreateParams1 { value: number; }
export interface testrunnerUpdateParams1 { id: number; newValue: number; }
export type testrunnerStatus1 = 'active' | 'inactive' | 'pending';
export interface testrunnerQueryResult1<T> { success: boolean; data?: T; error?: string; }
