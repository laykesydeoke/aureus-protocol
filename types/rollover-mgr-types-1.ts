export interface rollovermgrEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface rollovermgrCreateParams1 { value: number; }
export interface rollovermgrUpdateParams1 { id: number; newValue: number; }
export type rollovermgrStatus1 = 'active' | 'inactive' | 'pending';
export interface rollovermgrQueryResult1<T> { success: boolean; data?: T; error?: string; }
