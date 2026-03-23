export interface gcrunnerEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface gcrunnerCreateParams2 { value: number; }
export interface gcrunnerUpdateParams2 { id: number; newValue: number; }
export type gcrunnerStatus2 = 'active' | 'inactive' | 'pending';
export interface gcrunnerQueryResult2<T> { success: boolean; data?: T; error?: string; }
