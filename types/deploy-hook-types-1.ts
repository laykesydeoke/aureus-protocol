export interface deployhookEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface deployhookCreateParams1 { value: number; }
export interface deployhookUpdateParams1 { id: number; newValue: number; }
export type deployhookStatus1 = 'active' | 'inactive' | 'pending';
export interface deployhookQueryResult1<T> { success: boolean; data?: T; error?: string; }
