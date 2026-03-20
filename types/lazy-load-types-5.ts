export interface lazyloadEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface lazyloadCreateParams5 { value: number; }
export interface lazyloadUpdateParams5 { id: number; newValue: number; }
export type lazyloadStatus5 = 'active' | 'inactive' | 'pending';
export interface lazyloadQueryResult5<T> { success: boolean; data?: T; error?: string; }
