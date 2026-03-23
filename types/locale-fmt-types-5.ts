export interface localefmtEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface localefmtCreateParams5 { value: number; }
export interface localefmtUpdateParams5 { id: number; newValue: number; }
export type localefmtStatus5 = 'active' | 'inactive' | 'pending';
export interface localefmtQueryResult5<T> { success: boolean; data?: T; error?: string; }
