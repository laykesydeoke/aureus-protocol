export interface spancollectEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface spancollectCreateParams5 { value: number; }
export interface spancollectUpdateParams5 { id: number; newValue: number; }
export type spancollectStatus5 = 'active' | 'inactive' | 'pending';
export interface spancollectQueryResult5<T> { success: boolean; data?: T; error?: string; }
