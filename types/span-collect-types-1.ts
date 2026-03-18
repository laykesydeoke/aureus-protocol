export interface spancollectEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface spancollectCreateParams1 { value: number; }
export interface spancollectUpdateParams1 { id: number; newValue: number; }
export type spancollectStatus1 = 'active' | 'inactive' | 'pending';
export interface spancollectQueryResult1<T> { success: boolean; data?: T; error?: string; }
