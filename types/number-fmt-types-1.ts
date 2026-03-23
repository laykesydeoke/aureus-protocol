export interface numberfmtEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface numberfmtCreateParams1 { value: number; }
export interface numberfmtUpdateParams1 { id: number; newValue: number; }
export type numberfmtStatus1 = 'active' | 'inactive' | 'pending';
export interface numberfmtQueryResult1<T> { success: boolean; data?: T; error?: string; }
