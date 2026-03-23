export interface rollovermgrEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface rollovermgrCreateParams4 { value: number; }
export interface rollovermgrUpdateParams4 { id: number; newValue: number; }
export type rollovermgrStatus4 = 'active' | 'inactive' | 'pending';
export interface rollovermgrQueryResult4<T> { success: boolean; data?: T; error?: string; }
