export interface refundprocEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface refundprocCreateParams3 { value: number; }
export interface refundprocUpdateParams3 { id: number; newValue: number; }
export type refundprocStatus3 = 'active' | 'inactive' | 'pending';
export interface refundprocQueryResult3<T> { success: boolean; data?: T; error?: string; }
