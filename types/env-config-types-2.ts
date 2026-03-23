export interface envconfigEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface envconfigCreateParams2 { value: number; }
export interface envconfigUpdateParams2 { id: number; newValue: number; }
export type envconfigStatus2 = 'active' | 'inactive' | 'pending';
export interface envconfigQueryResult2<T> { success: boolean; data?: T; error?: string; }
