export interface formatsvcEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface formatsvcCreateParams3 { value: number; }
export interface formatsvcUpdateParams3 { id: number; newValue: number; }
export type formatsvcStatus3 = 'active' | 'inactive' | 'pending';
export interface formatsvcQueryResult3<T> { success: boolean; data?: T; error?: string; }
