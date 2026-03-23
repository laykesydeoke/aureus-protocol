export interface textsanitizeEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface textsanitizeCreateParams5 { value: number; }
export interface textsanitizeUpdateParams5 { id: number; newValue: number; }
export type textsanitizeStatus5 = 'active' | 'inactive' | 'pending';
export interface textsanitizeQueryResult5<T> { success: boolean; data?: T; error?: string; }
