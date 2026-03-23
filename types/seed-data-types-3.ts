export interface seeddataEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface seeddataCreateParams3 { value: number; }
export interface seeddataUpdateParams3 { id: number; newValue: number; }
export type seeddataStatus3 = 'active' | 'inactive' | 'pending';
export interface seeddataQueryResult3<T> { success: boolean; data?: T; error?: string; }
