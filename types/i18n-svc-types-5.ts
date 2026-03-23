export interface i18nsvcEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface i18nsvcCreateParams5 { value: number; }
export interface i18nsvcUpdateParams5 { id: number; newValue: number; }
export type i18nsvcStatus5 = 'active' | 'inactive' | 'pending';
export interface i18nsvcQueryResult5<T> { success: boolean; data?: T; error?: string; }
