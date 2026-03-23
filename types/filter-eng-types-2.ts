export interface filterengEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface filterengCreateParams2 { value: number; }
export interface filterengUpdateParams2 { id: number; newValue: number; }
export type filterengStatus2 = 'active' | 'inactive' | 'pending';
export interface filterengQueryResult2<T> { success: boolean; data?: T; error?: string; }
