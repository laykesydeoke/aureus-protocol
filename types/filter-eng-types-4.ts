export interface filterengEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface filterengCreateParams4 { value: number; }
export interface filterengUpdateParams4 { id: number; newValue: number; }
export type filterengStatus4 = 'active' | 'inactive' | 'pending';
export interface filterengQueryResult4<T> { success: boolean; data?: T; error?: string; }
