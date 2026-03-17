export interface permgateEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface permgateCreateParams4 { value: number; }
export interface permgateUpdateParams4 { id: number; newValue: number; }
export type permgateStatus4 = 'active' | 'inactive' | 'pending';
export interface permgateQueryResult4<T> { success: boolean; data?: T; error?: string; }
