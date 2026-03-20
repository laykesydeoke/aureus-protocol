export interface preloadmgrEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface preloadmgrCreateParams4 { value: number; }
export interface preloadmgrUpdateParams4 { id: number; newValue: number; }
export type preloadmgrStatus4 = 'active' | 'inactive' | 'pending';
export interface preloadmgrQueryResult4<T> { success: boolean; data?: T; error?: string; }
