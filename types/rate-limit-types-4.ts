export interface ratelimitEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface ratelimitCreateParams4 { value: number; }
export interface ratelimitUpdateParams4 { id: number; newValue: number; }
export type ratelimitStatus4 = 'active' | 'inactive' | 'pending';
export interface ratelimitQueryResult4<T> { success: boolean; data?: T; error?: string; }
