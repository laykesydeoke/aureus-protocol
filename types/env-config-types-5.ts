export interface envconfigEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface envconfigCreateParams5 { value: number; }
export interface envconfigUpdateParams5 { id: number; newValue: number; }
export type envconfigStatus5 = 'active' | 'inactive' | 'pending';
export interface envconfigQueryResult5<T> { success: boolean; data?: T; error?: string; }
