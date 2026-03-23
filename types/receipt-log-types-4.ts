export interface receiptlogEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface receiptlogCreateParams4 { value: number; }
export interface receiptlogUpdateParams4 { id: number; newValue: number; }
export type receiptlogStatus4 = 'active' | 'inactive' | 'pending';
export interface receiptlogQueryResult4<T> { success: boolean; data?: T; error?: string; }
