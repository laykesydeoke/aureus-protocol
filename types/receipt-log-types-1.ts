export interface receiptlogEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface receiptlogCreateParams1 { value: number; }
export interface receiptlogUpdateParams1 { id: number; newValue: number; }
export type receiptlogStatus1 = 'active' | 'inactive' | 'pending';
export interface receiptlogQueryResult1<T> { success: boolean; data?: T; error?: string; }
