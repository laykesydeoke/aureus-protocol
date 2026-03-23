export interface deployhookEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface deployhookCreateParams5 { value: number; }
export interface deployhookUpdateParams5 { id: number; newValue: number; }
export type deployhookStatus5 = 'active' | 'inactive' | 'pending';
export interface deployhookQueryResult5<T> { success: boolean; data?: T; error?: string; }
