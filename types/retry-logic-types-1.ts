export interface retrylogicEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface retrylogicCreateParams1 { value: number; }
export interface retrylogicUpdateParams1 { id: number; newValue: number; }
export type retrylogicStatus1 = 'active' | 'inactive' | 'pending';
export interface retrylogicQueryResult1<T> { success: boolean; data?: T; error?: string; }
