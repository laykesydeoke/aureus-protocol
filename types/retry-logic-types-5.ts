export interface retrylogicEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface retrylogicCreateParams5 { value: number; }
export interface retrylogicUpdateParams5 { id: number; newValue: number; }
export type retrylogicStatus5 = 'active' | 'inactive' | 'pending';
export interface retrylogicQueryResult5<T> { success: boolean; data?: T; error?: string; }
