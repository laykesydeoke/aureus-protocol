export interface l10nmgrEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface l10nmgrCreateParams2 { value: number; }
export interface l10nmgrUpdateParams2 { id: number; newValue: number; }
export type l10nmgrStatus2 = 'active' | 'inactive' | 'pending';
export interface l10nmgrQueryResult2<T> { success: boolean; data?: T; error?: string; }
