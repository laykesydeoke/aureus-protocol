export interface testrunnerEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface testrunnerCreateParams5 { value: number; }
export interface testrunnerUpdateParams5 { id: number; newValue: number; }
export type testrunnerStatus5 = 'active' | 'inactive' | 'pending';
export interface testrunnerQueryResult5<T> { success: boolean; data?: T; error?: string; }
