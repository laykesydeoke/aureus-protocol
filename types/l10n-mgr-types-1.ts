export interface l10nmgrEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface l10nmgrCreateParams1 { value: number; }
export interface l10nmgrUpdateParams1 { id: number; newValue: number; }
export type l10nmgrStatus1 = 'active' | 'inactive' | 'pending';
export interface l10nmgrQueryResult1<T> { success: boolean; data?: T; error?: string; }
