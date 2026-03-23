export interface numberfmtEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface numberfmtCreateParams5 { value: number; }
export interface numberfmtUpdateParams5 { id: number; newValue: number; }
export type numberfmtStatus5 = 'active' | 'inactive' | 'pending';
export interface numberfmtQueryResult5<T> { success: boolean; data?: T; error?: string; }
