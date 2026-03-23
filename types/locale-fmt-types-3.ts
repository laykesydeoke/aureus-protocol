export interface localefmtEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface localefmtCreateParams3 { value: number; }
export interface localefmtUpdateParams3 { id: number; newValue: number; }
export type localefmtStatus3 = 'active' | 'inactive' | 'pending';
export interface localefmtQueryResult3<T> { success: boolean; data?: T; error?: string; }
