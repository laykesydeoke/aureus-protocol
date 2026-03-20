export interface filterengEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface filterengCreateParams1 { value: number; }
export interface filterengUpdateParams1 { id: number; newValue: number; }
export type filterengStatus1 = 'active' | 'inactive' | 'pending';
export interface filterengQueryResult1<T> { success: boolean; data?: T; error?: string; }
