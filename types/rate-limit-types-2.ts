export interface ratelimitEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface ratelimitCreateParams2 { value: number; }
export interface ratelimitUpdateParams2 { id: number; newValue: number; }
export type ratelimitStatus2 = 'active' | 'inactive' | 'pending';
export interface ratelimitQueryResult2<T> { success: boolean; data?: T; error?: string; }
