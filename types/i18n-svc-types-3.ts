export interface i18nsvcEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface i18nsvcCreateParams3 { value: number; }
export interface i18nsvcUpdateParams3 { id: number; newValue: number; }
export type i18nsvcStatus3 = 'active' | 'inactive' | 'pending';
export interface i18nsvcQueryResult3<T> { success: boolean; data?: T; error?: string; }
