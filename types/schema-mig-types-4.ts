export interface schemamigEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface schemamigCreateParams4 { value: number; }
export interface schemamigUpdateParams4 { id: number; newValue: number; }
export type schemamigStatus4 = 'active' | 'inactive' | 'pending';
export interface schemamigQueryResult4<T> { success: boolean; data?: T; error?: string; }
