export interface currencyfmtEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface currencyfmtCreateParams1 { value: number; }
export interface currencyfmtUpdateParams1 { id: number; newValue: number; }
export type currencyfmtStatus1 = 'active' | 'inactive' | 'pending';
export interface currencyfmtQueryResult1<T> { success: boolean; data?: T; error?: string; }
