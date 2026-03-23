export interface tlsconfigEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface tlsconfigCreateParams5 { value: number; }
export interface tlsconfigUpdateParams5 { id: number; newValue: number; }
export type tlsconfigStatus5 = 'active' | 'inactive' | 'pending';
export interface tlsconfigQueryResult5<T> { success: boolean; data?: T; error?: string; }
