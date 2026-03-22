export interface kmsproxyEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface kmsproxyCreateParams3 { value: number; }
export interface kmsproxyUpdateParams3 { id: number; newValue: number; }
export type kmsproxyStatus3 = 'active' | 'inactive' | 'pending';
export interface kmsproxyQueryResult3<T> { success: boolean; data?: T; error?: string; }
