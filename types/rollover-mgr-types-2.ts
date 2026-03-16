export interface rollovermgrEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface rollovermgrCreateParams2 { value: number; }
export interface rollovermgrUpdateParams2 { id: number; newValue: number; }
export type rollovermgrStatus2 = 'active' | 'inactive' | 'pending';
export interface rollovermgrQueryResult2<T> { success: boolean; data?: T; error?: string; }
