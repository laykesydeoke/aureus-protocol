export interface usagealertEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface usagealertCreateParams2 { value: number; }
export interface usagealertUpdateParams2 { id: number; newValue: number; }
export type usagealertStatus2 = 'active' | 'inactive' | 'pending';
export interface usagealertQueryResult2<T> { success: boolean; data?: T; error?: string; }
