export interface filterengEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface filterengCreateParams3 { value: number; }
export interface filterengUpdateParams3 { id: number; newValue: number; }
export type filterengStatus3 = 'active' | 'inactive' | 'pending';
export interface filterengQueryResult3<T> { success: boolean; data?: T; error?: string; }
