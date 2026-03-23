export interface carrierapiEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface carrierapiCreateParams2 { value: number; }
export interface carrierapiUpdateParams2 { id: number; newValue: number; }
export type carrierapiStatus2 = 'active' | 'inactive' | 'pending';
export interface carrierapiQueryResult2<T> { success: boolean; data?: T; error?: string; }
