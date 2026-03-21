export interface deployhookEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface deployhookCreateParams4 { value: number; }
export interface deployhookUpdateParams4 { id: number; newValue: number; }
export type deployhookStatus4 = 'active' | 'inactive' | 'pending';
export interface deployhookQueryResult4<T> { success: boolean; data?: T; error?: string; }
