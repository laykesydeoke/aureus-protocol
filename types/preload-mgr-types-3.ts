export interface preloadmgrEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface preloadmgrCreateParams3 { value: number; }
export interface preloadmgrUpdateParams3 { id: number; newValue: number; }
export type preloadmgrStatus3 = 'active' | 'inactive' | 'pending';
export interface preloadmgrQueryResult3<T> { success: boolean; data?: T; error?: string; }
