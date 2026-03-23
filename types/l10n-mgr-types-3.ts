export interface l10nmgrEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface l10nmgrCreateParams3 { value: number; }
export interface l10nmgrUpdateParams3 { id: number; newValue: number; }
export type l10nmgrStatus3 = 'active' | 'inactive' | 'pending';
export interface l10nmgrQueryResult3<T> { success: boolean; data?: T; error?: string; }
