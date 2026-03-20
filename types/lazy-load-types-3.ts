export interface lazyloadEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface lazyloadCreateParams3 { value: number; }
export interface lazyloadUpdateParams3 { id: number; newValue: number; }
export type lazyloadStatus3 = 'active' | 'inactive' | 'pending';
export interface lazyloadQueryResult3<T> { success: boolean; data?: T; error?: string; }
