export interface failoverEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface failoverCreateParams2 { value: number; }
export interface failoverUpdateParams2 { id: number; newValue: number; }
export type failoverStatus2 = 'active' | 'inactive' | 'pending';
export interface failoverQueryResult2<T> { success: boolean; data?: T; error?: string; }
