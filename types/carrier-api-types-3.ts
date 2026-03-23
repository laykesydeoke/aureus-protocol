export interface carrierapiEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface carrierapiCreateParams3 { value: number; }
export interface carrierapiUpdateParams3 { id: number; newValue: number; }
export type carrierapiStatus3 = 'active' | 'inactive' | 'pending';
export interface carrierapiQueryResult3<T> { success: boolean; data?: T; error?: string; }
