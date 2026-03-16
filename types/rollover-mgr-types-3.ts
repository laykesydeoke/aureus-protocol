export interface rollovermgrEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface rollovermgrCreateParams3 { value: number; }
export interface rollovermgrUpdateParams3 { id: number; newValue: number; }
export type rollovermgrStatus3 = 'active' | 'inactive' | 'pending';
export interface rollovermgrQueryResult3<T> { success: boolean; data?: T; error?: string; }
