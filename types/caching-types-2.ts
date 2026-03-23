export interface cachingEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface cachingCreateParams2 { value: number; }
export interface cachingUpdateParams2 { id: number; newValue: number; }
export type cachingStatus2 = 'active' | 'inactive' | 'pending';
export interface cachingQueryResult2<T> { success: boolean; data?: T; error?: string; }
