export interface textsanitizeEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface textsanitizeCreateParams1 { value: number; }
export interface textsanitizeUpdateParams1 { id: number; newValue: number; }
export type textsanitizeStatus1 = 'active' | 'inactive' | 'pending';
export interface textsanitizeQueryResult1<T> { success: boolean; data?: T; error?: string; }
