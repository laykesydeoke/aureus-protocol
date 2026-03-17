export interface permgateEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface permgateCreateParams5 { value: number; }
export interface permgateUpdateParams5 { id: number; newValue: number; }
export type permgateStatus5 = 'active' | 'inactive' | 'pending';
export interface permgateQueryResult5<T> { success: boolean; data?: T; error?: string; }
