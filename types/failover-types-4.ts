export interface failoverEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface failoverCreateParams4 { value: number; }
export interface failoverUpdateParams4 { id: number; newValue: number; }
export type failoverStatus4 = 'active' | 'inactive' | 'pending';
export interface failoverQueryResult4<T> { success: boolean; data?: T; error?: string; }
