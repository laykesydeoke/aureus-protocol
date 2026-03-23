export interface seeddataEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface seeddataCreateParams5 { value: number; }
export interface seeddataUpdateParams5 { id: number; newValue: number; }
export type seeddataStatus5 = 'active' | 'inactive' | 'pending';
export interface seeddataQueryResult5<T> { success: boolean; data?: T; error?: string; }
