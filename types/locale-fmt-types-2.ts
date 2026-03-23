export interface localefmtEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface localefmtCreateParams2 { value: number; }
export interface localefmtUpdateParams2 { id: number; newValue: number; }
export type localefmtStatus2 = 'active' | 'inactive' | 'pending';
export interface localefmtQueryResult2<T> { success: boolean; data?: T; error?: string; }
