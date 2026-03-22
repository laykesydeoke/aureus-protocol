export interface tlsconfigEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface tlsconfigCreateParams4 { value: number; }
export interface tlsconfigUpdateParams4 { id: number; newValue: number; }
export type tlsconfigStatus4 = 'active' | 'inactive' | 'pending';
export interface tlsconfigQueryResult4<T> { success: boolean; data?: T; error?: string; }
