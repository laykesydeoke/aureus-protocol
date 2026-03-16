export interface refundprocEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface refundprocCreateParams1 { value: number; }
export interface refundprocUpdateParams1 { id: number; newValue: number; }
export type refundprocStatus1 = 'active' | 'inactive' | 'pending';
export interface refundprocQueryResult1<T> { success: boolean; data?: T; error?: string; }
