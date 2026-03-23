export interface reportgenEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface reportgenCreateParams4 { value: number; }
export interface reportgenUpdateParams4 { id: number; newValue: number; }
export type reportgenStatus4 = 'active' | 'inactive' | 'pending';
export interface reportgenQueryResult4<T> { success: boolean; data?: T; error?: string; }
