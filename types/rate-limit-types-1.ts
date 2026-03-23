export interface ratelimitEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface ratelimitCreateParams1 { value: number; }
export interface ratelimitUpdateParams1 { id: number; newValue: number; }
export type ratelimitStatus1 = 'active' | 'inactive' | 'pending';
export interface ratelimitQueryResult1<T> { success: boolean; data?: T; error?: string; }
