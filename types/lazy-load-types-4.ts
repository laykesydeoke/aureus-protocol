export interface lazyloadEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface lazyloadCreateParams4 { value: number; }
export interface lazyloadUpdateParams4 { id: number; newValue: number; }
export type lazyloadStatus4 = 'active' | 'inactive' | 'pending';
export interface lazyloadQueryResult4<T> { success: boolean; data?: T; error?: string; }
