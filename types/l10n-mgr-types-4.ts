export interface l10nmgrEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface l10nmgrCreateParams4 { value: number; }
export interface l10nmgrUpdateParams4 { id: number; newValue: number; }
export type l10nmgrStatus4 = 'active' | 'inactive' | 'pending';
export interface l10nmgrQueryResult4<T> { success: boolean; data?: T; error?: string; }
