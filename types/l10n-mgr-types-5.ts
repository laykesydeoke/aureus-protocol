export interface l10nmgrEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface l10nmgrCreateParams5 { value: number; }
export interface l10nmgrUpdateParams5 { id: number; newValue: number; }
export type l10nmgrStatus5 = 'active' | 'inactive' | 'pending';
export interface l10nmgrQueryResult5<T> { success: boolean; data?: T; error?: string; }
