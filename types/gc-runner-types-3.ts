export interface gcrunnerEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface gcrunnerCreateParams3 { value: number; }
export interface gcrunnerUpdateParams3 { id: number; newValue: number; }
export type gcrunnerStatus3 = 'active' | 'inactive' | 'pending';
export interface gcrunnerQueryResult3<T> { success: boolean; data?: T; error?: string; }
