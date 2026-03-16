export interface refundprocEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface refundprocCreateParams2 { value: number; }
export interface refundprocUpdateParams2 { id: number; newValue: number; }
export type refundprocStatus2 = 'active' | 'inactive' | 'pending';
export interface refundprocQueryResult2<T> { success: boolean; data?: T; error?: string; }
