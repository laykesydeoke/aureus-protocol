export interface seeddataEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface seeddataCreateParams4 { value: number; }
export interface seeddataUpdateParams4 { id: number; newValue: number; }
export type seeddataStatus4 = 'active' | 'inactive' | 'pending';
export interface seeddataQueryResult4<T> { success: boolean; data?: T; error?: string; }
