export interface currencyfmtEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface currencyfmtCreateParams2 { value: number; }
export interface currencyfmtUpdateParams2 { id: number; newValue: number; }
export type currencyfmtStatus2 = 'active' | 'inactive' | 'pending';
export interface currencyfmtQueryResult2<T> { success: boolean; data?: T; error?: string; }
