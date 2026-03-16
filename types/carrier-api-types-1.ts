export interface carrierapiEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface carrierapiCreateParams1 { value: number; }
export interface carrierapiUpdateParams1 { id: number; newValue: number; }
export type carrierapiStatus1 = 'active' | 'inactive' | 'pending';
export interface carrierapiQueryResult1<T> { success: boolean; data?: T; error?: string; }
