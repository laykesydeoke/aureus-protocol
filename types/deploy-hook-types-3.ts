export interface deployhookEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface deployhookCreateParams3 { value: number; }
export interface deployhookUpdateParams3 { id: number; newValue: number; }
export type deployhookStatus3 = 'active' | 'inactive' | 'pending';
export interface deployhookQueryResult3<T> { success: boolean; data?: T; error?: string; }
