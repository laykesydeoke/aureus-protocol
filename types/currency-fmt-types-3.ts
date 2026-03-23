export interface currencyfmtEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface currencyfmtCreateParams3 { value: number; }
export interface currencyfmtUpdateParams3 { id: number; newValue: number; }
export type currencyfmtStatus3 = 'active' | 'inactive' | 'pending';
export interface currencyfmtQueryResult3<T> { success: boolean; data?: T; error?: string; }
