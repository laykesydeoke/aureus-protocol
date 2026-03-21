export interface deployhookEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface deployhookCreateParams2 { value: number; }
export interface deployhookUpdateParams2 { id: number; newValue: number; }
export type deployhookStatus2 = 'active' | 'inactive' | 'pending';
export interface deployhookQueryResult2<T> { success: boolean; data?: T; error?: string; }
