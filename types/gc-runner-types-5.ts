export interface gcrunnerEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface gcrunnerCreateParams5 { value: number; }
export interface gcrunnerUpdateParams5 { id: number; newValue: number; }
export type gcrunnerStatus5 = 'active' | 'inactive' | 'pending';
export interface gcrunnerQueryResult5<T> { success: boolean; data?: T; error?: string; }
