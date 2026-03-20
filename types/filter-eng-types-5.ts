export interface filterengEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface filterengCreateParams5 { value: number; }
export interface filterengUpdateParams5 { id: number; newValue: number; }
export type filterengStatus5 = 'active' | 'inactive' | 'pending';
export interface filterengQueryResult5<T> { success: boolean; data?: T; error?: string; }
