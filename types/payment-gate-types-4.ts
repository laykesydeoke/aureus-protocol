export interface paymentgateEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface paymentgateCreateParams4 { value: number; }
export interface paymentgateUpdateParams4 { id: number; newValue: number; }
export type paymentgateStatus4 = 'active' | 'inactive' | 'pending';
export interface paymentgateQueryResult4<T> { success: boolean; data?: T; error?: string; }
