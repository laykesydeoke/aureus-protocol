export interface permgateEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface permgateCreateParams2 { value: number; }
export interface permgateUpdateParams2 { id: number; newValue: number; }
export type permgateStatus2 = 'active' | 'inactive' | 'pending';
export interface permgateQueryResult2<T> { success: boolean; data?: T; error?: string; }
