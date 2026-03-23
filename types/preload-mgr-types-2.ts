export interface preloadmgrEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface preloadmgrCreateParams2 { value: number; }
export interface preloadmgrUpdateParams2 { id: number; newValue: number; }
export type preloadmgrStatus2 = 'active' | 'inactive' | 'pending';
export interface preloadmgrQueryResult2<T> { success: boolean; data?: T; error?: string; }
