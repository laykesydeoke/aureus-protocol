export interface spancollectEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface spancollectCreateParams2 { value: number; }
export interface spancollectUpdateParams2 { id: number; newValue: number; }
export type spancollectStatus2 = 'active' | 'inactive' | 'pending';
export interface spancollectQueryResult2<T> { success: boolean; data?: T; error?: string; }
