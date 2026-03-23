export interface numberfmtEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface numberfmtCreateParams4 { value: number; }
export interface numberfmtUpdateParams4 { id: number; newValue: number; }
export type numberfmtStatus4 = 'active' | 'inactive' | 'pending';
export interface numberfmtQueryResult4<T> { success: boolean; data?: T; error?: string; }
