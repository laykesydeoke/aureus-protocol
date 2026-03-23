export interface currencyfmtEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface currencyfmtCreateParams5 { value: number; }
export interface currencyfmtUpdateParams5 { id: number; newValue: number; }
export type currencyfmtStatus5 = 'active' | 'inactive' | 'pending';
export interface currencyfmtQueryResult5<T> { success: boolean; data?: T; error?: string; }
