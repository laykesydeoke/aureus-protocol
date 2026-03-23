export interface seeddataEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface seeddataCreateParams2 { value: number; }
export interface seeddataUpdateParams2 { id: number; newValue: number; }
export type seeddataStatus2 = 'active' | 'inactive' | 'pending';
export interface seeddataQueryResult2<T> { success: boolean; data?: T; error?: string; }
