export interface usagealertEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface usagealertCreateParams3 { value: number; }
export interface usagealertUpdateParams3 { id: number; newValue: number; }
export type usagealertStatus3 = 'active' | 'inactive' | 'pending';
export interface usagealertQueryResult3<T> { success: boolean; data?: T; error?: string; }
