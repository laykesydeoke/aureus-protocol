export interface schemamigEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface schemamigCreateParams3 { value: number; }
export interface schemamigUpdateParams3 { id: number; newValue: number; }
export type schemamigStatus3 = 'active' | 'inactive' | 'pending';
export interface schemamigQueryResult3<T> { success: boolean; data?: T; error?: string; }
