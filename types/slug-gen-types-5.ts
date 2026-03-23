export interface sluggenEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface sluggenCreateParams5 { value: number; }
export interface sluggenUpdateParams5 { id: number; newValue: number; }
export type sluggenStatus5 = 'active' | 'inactive' | 'pending';
export interface sluggenQueryResult5<T> { success: boolean; data?: T; error?: string; }
