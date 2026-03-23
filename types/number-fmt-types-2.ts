export interface numberfmtEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface numberfmtCreateParams2 { value: number; }
export interface numberfmtUpdateParams2 { id: number; newValue: number; }
export type numberfmtStatus2 = 'active' | 'inactive' | 'pending';
export interface numberfmtQueryResult2<T> { success: boolean; data?: T; error?: string; }
