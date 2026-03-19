export interface gcrunnerEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface gcrunnerCreateParams4 { value: number; }
export interface gcrunnerUpdateParams4 { id: number; newValue: number; }
export type gcrunnerStatus4 = 'active' | 'inactive' | 'pending';
export interface gcrunnerQueryResult4<T> { success: boolean; data?: T; error?: string; }
