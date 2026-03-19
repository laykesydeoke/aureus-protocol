export interface schemamigEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface schemamigCreateParams1 { value: number; }
export interface schemamigUpdateParams1 { id: number; newValue: number; }
export type schemamigStatus1 = 'active' | 'inactive' | 'pending';
export interface schemamigQueryResult1<T> { success: boolean; data?: T; error?: string; }
