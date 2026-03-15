export interface failoverEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface failoverCreateParams3 { value: number; }
export interface failoverUpdateParams3 { id: number; newValue: number; }
export type failoverStatus3 = 'active' | 'inactive' | 'pending';
export interface failoverQueryResult3<T> { success: boolean; data?: T; error?: string; }
