export interface usagealertEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface usagealertCreateParams1 { value: number; }
export interface usagealertUpdateParams1 { id: number; newValue: number; }
export type usagealertStatus1 = 'active' | 'inactive' | 'pending';
export interface usagealertQueryResult1<T> { success: boolean; data?: T; error?: string; }
