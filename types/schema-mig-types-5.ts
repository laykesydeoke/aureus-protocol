export interface schemamigEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface schemamigCreateParams5 { value: number; }
export interface schemamigUpdateParams5 { id: number; newValue: number; }
export type schemamigStatus5 = 'active' | 'inactive' | 'pending';
export interface schemamigQueryResult5<T> { success: boolean; data?: T; error?: string; }
