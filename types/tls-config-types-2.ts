export interface tlsconfigEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface tlsconfigCreateParams2 { value: number; }
export interface tlsconfigUpdateParams2 { id: number; newValue: number; }
export type tlsconfigStatus2 = 'active' | 'inactive' | 'pending';
export interface tlsconfigQueryResult2<T> { success: boolean; data?: T; error?: string; }
