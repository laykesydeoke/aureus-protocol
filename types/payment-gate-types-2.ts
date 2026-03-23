export interface paymentgateEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface paymentgateCreateParams2 { value: number; }
export interface paymentgateUpdateParams2 { id: number; newValue: number; }
export type paymentgateStatus2 = 'active' | 'inactive' | 'pending';
export interface paymentgateQueryResult2<T> { success: boolean; data?: T; error?: string; }
