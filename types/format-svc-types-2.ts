export interface formatsvcEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface formatsvcCreateParams2 { value: number; }
export interface formatsvcUpdateParams2 { id: number; newValue: number; }
export type formatsvcStatus2 = 'active' | 'inactive' | 'pending';
export interface formatsvcQueryResult2<T> { success: boolean; data?: T; error?: string; }
