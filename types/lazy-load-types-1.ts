export interface lazyloadEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface lazyloadCreateParams1 { value: number; }
export interface lazyloadUpdateParams1 { id: number; newValue: number; }
export type lazyloadStatus1 = 'active' | 'inactive' | 'pending';
export interface lazyloadQueryResult1<T> { success: boolean; data?: T; error?: string; }
