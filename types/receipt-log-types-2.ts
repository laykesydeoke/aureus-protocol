export interface receiptlogEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface receiptlogCreateParams2 { value: number; }
export interface receiptlogUpdateParams2 { id: number; newValue: number; }
export type receiptlogStatus2 = 'active' | 'inactive' | 'pending';
export interface receiptlogQueryResult2<T> { success: boolean; data?: T; error?: string; }
