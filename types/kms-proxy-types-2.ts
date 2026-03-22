export interface kmsproxyEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface kmsproxyCreateParams2 { value: number; }
export interface kmsproxyUpdateParams2 { id: number; newValue: number; }
export type kmsproxyStatus2 = 'active' | 'inactive' | 'pending';
export interface kmsproxyQueryResult2<T> { success: boolean; data?: T; error?: string; }
