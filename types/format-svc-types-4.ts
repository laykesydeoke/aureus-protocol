export interface formatsvcEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface formatsvcCreateParams4 { value: number; }
export interface formatsvcUpdateParams4 { id: number; newValue: number; }
export type formatsvcStatus4 = 'active' | 'inactive' | 'pending';
export interface formatsvcQueryResult4<T> { success: boolean; data?: T; error?: string; }
