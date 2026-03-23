export interface paymentgateEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface paymentgateCreateParams5 { value: number; }
export interface paymentgateUpdateParams5 { id: number; newValue: number; }
export type paymentgateStatus5 = 'active' | 'inactive' | 'pending';
export interface paymentgateQueryResult5<T> { success: boolean; data?: T; error?: string; }
