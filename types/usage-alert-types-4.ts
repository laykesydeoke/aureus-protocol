export interface usagealertEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface usagealertCreateParams4 { value: number; }
export interface usagealertUpdateParams4 { id: number; newValue: number; }
export type usagealertStatus4 = 'active' | 'inactive' | 'pending';
export interface usagealertQueryResult4<T> { success: boolean; data?: T; error?: string; }
