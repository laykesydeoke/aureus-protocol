export interface permgateEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface permgateCreateParams1 { value: number; }
export interface permgateUpdateParams1 { id: number; newValue: number; }
export type permgateStatus1 = 'active' | 'inactive' | 'pending';
export interface permgateQueryResult1<T> { success: boolean; data?: T; error?: string; }
