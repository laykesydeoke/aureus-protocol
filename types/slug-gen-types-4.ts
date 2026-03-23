export interface sluggenEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface sluggenCreateParams4 { value: number; }
export interface sluggenUpdateParams4 { id: number; newValue: number; }
export type sluggenStatus4 = 'active' | 'inactive' | 'pending';
export interface sluggenQueryResult4<T> { success: boolean; data?: T; error?: string; }
