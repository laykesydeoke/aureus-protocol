export interface preloadmgrEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface preloadmgrCreateParams1 { value: number; }
export interface preloadmgrUpdateParams1 { id: number; newValue: number; }
export type preloadmgrStatus1 = 'active' | 'inactive' | 'pending';
export interface preloadmgrQueryResult1<T> { success: boolean; data?: T; error?: string; }
