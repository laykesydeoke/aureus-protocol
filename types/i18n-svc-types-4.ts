export interface i18nsvcEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface i18nsvcCreateParams4 { value: number; }
export interface i18nsvcUpdateParams4 { id: number; newValue: number; }
export type i18nsvcStatus4 = 'active' | 'inactive' | 'pending';
export interface i18nsvcQueryResult4<T> { success: boolean; data?: T; error?: string; }
