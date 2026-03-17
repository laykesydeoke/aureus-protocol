export interface retrylogicEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface retrylogicCreateParams3 { value: number; }
export interface retrylogicUpdateParams3 { id: number; newValue: number; }
export type retrylogicStatus3 = 'active' | 'inactive' | 'pending';
export interface retrylogicQueryResult3<T> { success: boolean; data?: T; error?: string; }
