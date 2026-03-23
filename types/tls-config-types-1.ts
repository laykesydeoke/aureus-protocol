export interface tlsconfigEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface tlsconfigCreateParams1 { value: number; }
export interface tlsconfigUpdateParams1 { id: number; newValue: number; }
export type tlsconfigStatus1 = 'active' | 'inactive' | 'pending';
export interface tlsconfigQueryResult1<T> { success: boolean; data?: T; error?: string; }
