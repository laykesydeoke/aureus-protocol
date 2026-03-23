export interface carrierapiEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface carrierapiCreateParams4 { value: number; }
export interface carrierapiUpdateParams4 { id: number; newValue: number; }
export type carrierapiStatus4 = 'active' | 'inactive' | 'pending';
export interface carrierapiQueryResult4<T> { success: boolean; data?: T; error?: string; }
