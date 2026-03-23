export interface preloadmgrEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface preloadmgrCreateParams5 { value: number; }
export interface preloadmgrUpdateParams5 { id: number; newValue: number; }
export type preloadmgrStatus5 = 'active' | 'inactive' | 'pending';
export interface preloadmgrQueryResult5<T> { success: boolean; data?: T; error?: string; }
