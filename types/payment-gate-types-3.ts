export interface paymentgateEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface paymentgateCreateParams3 { value: number; }
export interface paymentgateUpdateParams3 { id: number; newValue: number; }
export type paymentgateStatus3 = 'active' | 'inactive' | 'pending';
export interface paymentgateQueryResult3<T> { success: boolean; data?: T; error?: string; }
