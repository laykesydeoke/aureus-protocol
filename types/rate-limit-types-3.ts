export interface ratelimitEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface ratelimitCreateParams3 { value: number; }
export interface ratelimitUpdateParams3 { id: number; newValue: number; }
export type ratelimitStatus3 = 'active' | 'inactive' | 'pending';
export interface ratelimitQueryResult3<T> { success: boolean; data?: T; error?: string; }
