export interface paymentgateEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface paymentgateCreateParams1 { value: number; }
export interface paymentgateUpdateParams1 { id: number; newValue: number; }
export type paymentgateStatus1 = 'active' | 'inactive' | 'pending';
export interface paymentgateQueryResult1<T> { success: boolean; data?: T; error?: string; }
