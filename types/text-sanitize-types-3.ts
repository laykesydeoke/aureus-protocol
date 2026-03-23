export interface textsanitizeEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface textsanitizeCreateParams3 { value: number; }
export interface textsanitizeUpdateParams3 { id: number; newValue: number; }
export type textsanitizeStatus3 = 'active' | 'inactive' | 'pending';
export interface textsanitizeQueryResult3<T> { success: boolean; data?: T; error?: string; }
