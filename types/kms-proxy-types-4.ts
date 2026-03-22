export interface kmsproxyEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface kmsproxyCreateParams4 { value: number; }
export interface kmsproxyUpdateParams4 { id: number; newValue: number; }
export type kmsproxyStatus4 = 'active' | 'inactive' | 'pending';
export interface kmsproxyQueryResult4<T> { success: boolean; data?: T; error?: string; }
