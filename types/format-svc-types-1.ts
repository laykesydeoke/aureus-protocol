export interface formatsvcEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface formatsvcCreateParams1 { value: number; }
export interface formatsvcUpdateParams1 { id: number; newValue: number; }
export type formatsvcStatus1 = 'active' | 'inactive' | 'pending';
export interface formatsvcQueryResult1<T> { success: boolean; data?: T; error?: string; }
