export interface envconfigEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface envconfigCreateParams3 { value: number; }
export interface envconfigUpdateParams3 { id: number; newValue: number; }
export type envconfigStatus3 = 'active' | 'inactive' | 'pending';
export interface envconfigQueryResult3<T> { success: boolean; data?: T; error?: string; }
