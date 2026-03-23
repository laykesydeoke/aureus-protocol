export interface carrierapiEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface carrierapiCreateParams5 { value: number; }
export interface carrierapiUpdateParams5 { id: number; newValue: number; }
export type carrierapiStatus5 = 'active' | 'inactive' | 'pending';
export interface carrierapiQueryResult5<T> { success: boolean; data?: T; error?: string; }
