export interface failoverEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface failoverCreateParams1 { value: number; }
export interface failoverUpdateParams1 { id: number; newValue: number; }
export type failoverStatus1 = 'active' | 'inactive' | 'pending';
export interface failoverQueryResult1<T> { success: boolean; data?: T; error?: string; }
