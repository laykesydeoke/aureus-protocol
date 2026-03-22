export interface kmsproxyEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface kmsproxyCreateParams1 { value: number; }
export interface kmsproxyUpdateParams1 { id: number; newValue: number; }
export type kmsproxyStatus1 = 'active' | 'inactive' | 'pending';
export interface kmsproxyQueryResult1<T> { success: boolean; data?: T; error?: string; }
