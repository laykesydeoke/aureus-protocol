export interface spancollectEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface spancollectCreateParams4 { value: number; }
export interface spancollectUpdateParams4 { id: number; newValue: number; }
export type spancollectStatus4 = 'active' | 'inactive' | 'pending';
export interface spancollectQueryResult4<T> { success: boolean; data?: T; error?: string; }
