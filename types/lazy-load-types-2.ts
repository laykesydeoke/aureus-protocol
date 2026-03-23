export interface lazyloadEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface lazyloadCreateParams2 { value: number; }
export interface lazyloadUpdateParams2 { id: number; newValue: number; }
export type lazyloadStatus2 = 'active' | 'inactive' | 'pending';
export interface lazyloadQueryResult2<T> { success: boolean; data?: T; error?: string; }
