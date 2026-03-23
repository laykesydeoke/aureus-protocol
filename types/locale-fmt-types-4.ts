export interface localefmtEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface localefmtCreateParams4 { value: number; }
export interface localefmtUpdateParams4 { id: number; newValue: number; }
export type localefmtStatus4 = 'active' | 'inactive' | 'pending';
export interface localefmtQueryResult4<T> { success: boolean; data?: T; error?: string; }
