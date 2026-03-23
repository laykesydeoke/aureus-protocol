export interface localefmtEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface localefmtCreateParams1 { value: number; }
export interface localefmtUpdateParams1 { id: number; newValue: number; }
export type localefmtStatus1 = 'active' | 'inactive' | 'pending';
export interface localefmtQueryResult1<T> { success: boolean; data?: T; error?: string; }
