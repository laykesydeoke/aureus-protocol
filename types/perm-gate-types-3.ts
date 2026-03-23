export interface permgateEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface permgateCreateParams3 { value: number; }
export interface permgateUpdateParams3 { id: number; newValue: number; }
export type permgateStatus3 = 'active' | 'inactive' | 'pending';
export interface permgateQueryResult3<T> { success: boolean; data?: T; error?: string; }
