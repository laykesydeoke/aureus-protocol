export interface currencyfmtEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface currencyfmtCreateParams4 { value: number; }
export interface currencyfmtUpdateParams4 { id: number; newValue: number; }
export type currencyfmtStatus4 = 'active' | 'inactive' | 'pending';
export interface currencyfmtQueryResult4<T> { success: boolean; data?: T; error?: string; }
