export interface envconfigEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface envconfigCreateParams1 { value: number; }
export interface envconfigUpdateParams1 { id: number; newValue: number; }
export type envconfigStatus1 = 'active' | 'inactive' | 'pending';
export interface envconfigQueryResult1<T> { success: boolean; data?: T; error?: string; }
