export interface i18nsvcEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface i18nsvcCreateParams1 { value: number; }
export interface i18nsvcUpdateParams1 { id: number; newValue: number; }
export type i18nsvcStatus1 = 'active' | 'inactive' | 'pending';
export interface i18nsvcQueryResult1<T> { success: boolean; data?: T; error?: string; }
