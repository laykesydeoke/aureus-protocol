export interface textsanitizeEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface textsanitizeCreateParams4 { value: number; }
export interface textsanitizeUpdateParams4 { id: number; newValue: number; }
export type textsanitizeStatus4 = 'active' | 'inactive' | 'pending';
export interface textsanitizeQueryResult4<T> { success: boolean; data?: T; error?: string; }
