export interface rollovermgrEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface rollovermgrCreateParams5 { value: number; }
export interface rollovermgrUpdateParams5 { id: number; newValue: number; }
export type rollovermgrStatus5 = 'active' | 'inactive' | 'pending';
export interface rollovermgrQueryResult5<T> { success: boolean; data?: T; error?: string; }
