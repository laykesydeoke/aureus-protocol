export interface schemamigEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface schemamigCreateParams2 { value: number; }
export interface schemamigUpdateParams2 { id: number; newValue: number; }
export type schemamigStatus2 = 'active' | 'inactive' | 'pending';
export interface schemamigQueryResult2<T> { success: boolean; data?: T; error?: string; }
