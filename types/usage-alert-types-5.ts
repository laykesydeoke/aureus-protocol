export interface usagealertEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface usagealertCreateParams5 { value: number; }
export interface usagealertUpdateParams5 { id: number; newValue: number; }
export type usagealertStatus5 = 'active' | 'inactive' | 'pending';
export interface usagealertQueryResult5<T> { success: boolean; data?: T; error?: string; }
