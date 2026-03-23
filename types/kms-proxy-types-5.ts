export interface kmsproxyEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface kmsproxyCreateParams5 { value: number; }
export interface kmsproxyUpdateParams5 { id: number; newValue: number; }
export type kmsproxyStatus5 = 'active' | 'inactive' | 'pending';
export interface kmsproxyQueryResult5<T> { success: boolean; data?: T; error?: string; }
