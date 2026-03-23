export interface i18nsvcEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface i18nsvcCreateParams2 { value: number; }
export interface i18nsvcUpdateParams2 { id: number; newValue: number; }
export type i18nsvcStatus2 = 'active' | 'inactive' | 'pending';
export interface i18nsvcQueryResult2<T> { success: boolean; data?: T; error?: string; }
