export interface textsanitizeEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface textsanitizeCreateParams2 { value: number; }
export interface textsanitizeUpdateParams2 { id: number; newValue: number; }
export type textsanitizeStatus2 = 'active' | 'inactive' | 'pending';
export interface textsanitizeQueryResult2<T> { success: boolean; data?: T; error?: string; }
