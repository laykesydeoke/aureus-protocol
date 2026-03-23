export interface ratelimitEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface ratelimitCreateParams5 { value: number; }
export interface ratelimitUpdateParams5 { id: number; newValue: number; }
export type ratelimitStatus5 = 'active' | 'inactive' | 'pending';
export interface ratelimitQueryResult5<T> { success: boolean; data?: T; error?: string; }
