export interface seeddataEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface seeddataCreateParams1 { value: number; }
export interface seeddataUpdateParams1 { id: number; newValue: number; }
export type seeddataStatus1 = 'active' | 'inactive' | 'pending';
export interface seeddataQueryResult1<T> { success: boolean; data?: T; error?: string; }
