export interface cachingEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cachingCreateParams5 { value: number; }
export interface cachingUpdateParams5 { id: number; newValue: number; }
export type cachingStatus5 = 'active' | 'inactive' | 'pending';
export interface cachingQueryResult5<T> { success: boolean; data?: T; error?: string; }
