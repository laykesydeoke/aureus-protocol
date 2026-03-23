export interface tlsconfigEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface tlsconfigCreateParams3 { value: number; }
export interface tlsconfigUpdateParams3 { id: number; newValue: number; }
export type tlsconfigStatus3 = 'active' | 'inactive' | 'pending';
export interface tlsconfigQueryResult3<T> { success: boolean; data?: T; error?: string; }
