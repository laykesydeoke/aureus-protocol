export interface receiptlogEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface receiptlogCreateParams5 { value: number; }
export interface receiptlogUpdateParams5 { id: number; newValue: number; }
export type receiptlogStatus5 = 'active' | 'inactive' | 'pending';
export interface receiptlogQueryResult5<T> { success: boolean; data?: T; error?: string; }
