export interface numberfmtEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface numberfmtCreateParams3 { value: number; }
export interface numberfmtUpdateParams3 { id: number; newValue: number; }
export type numberfmtStatus3 = 'active' | 'inactive' | 'pending';
export interface numberfmtQueryResult3<T> { success: boolean; data?: T; error?: string; }
