export interface refundprocEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface refundprocCreateParams4 { value: number; }
export interface refundprocUpdateParams4 { id: number; newValue: number; }
export type refundprocStatus4 = 'active' | 'inactive' | 'pending';
export interface refundprocQueryResult4<T> { success: boolean; data?: T; error?: string; }
