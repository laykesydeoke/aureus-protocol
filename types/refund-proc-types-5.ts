export interface refundprocEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface refundprocCreateParams5 { value: number; }
export interface refundprocUpdateParams5 { id: number; newValue: number; }
export type refundprocStatus5 = 'active' | 'inactive' | 'pending';
export interface refundprocQueryResult5<T> { success: boolean; data?: T; error?: string; }
