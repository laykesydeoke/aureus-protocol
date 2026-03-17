export interface retrylogicEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface retrylogicCreateParams2 { value: number; }
export interface retrylogicUpdateParams2 { id: number; newValue: number; }
export type retrylogicStatus2 = 'active' | 'inactive' | 'pending';
export interface retrylogicQueryResult2<T> { success: boolean; data?: T; error?: string; }
