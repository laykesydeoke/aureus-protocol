export interface envconfigEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface envconfigCreateParams4 { value: number; }
export interface envconfigUpdateParams4 { id: number; newValue: number; }
export type envconfigStatus4 = 'active' | 'inactive' | 'pending';
export interface envconfigQueryResult4<T> { success: boolean; data?: T; error?: string; }
