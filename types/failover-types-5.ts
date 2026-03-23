export interface failoverEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface failoverCreateParams5 { value: number; }
export interface failoverUpdateParams5 { id: number; newValue: number; }
export type failoverStatus5 = 'active' | 'inactive' | 'pending';
export interface failoverQueryResult5<T> { success: boolean; data?: T; error?: string; }
