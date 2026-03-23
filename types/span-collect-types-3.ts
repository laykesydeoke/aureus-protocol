export interface spancollectEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface spancollectCreateParams3 { value: number; }
export interface spancollectUpdateParams3 { id: number; newValue: number; }
export type spancollectStatus3 = 'active' | 'inactive' | 'pending';
export interface spancollectQueryResult3<T> { success: boolean; data?: T; error?: string; }
