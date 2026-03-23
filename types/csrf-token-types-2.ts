export interface csrftokenEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface csrftokenCreateParams2 { value: number; }
export interface csrftokenUpdateParams2 { id: number; newValue: number; }
export type csrftokenStatus2 = 'active' | 'inactive' | 'pending';
export interface csrftokenQueryResult2<T> { success: boolean; data?: T; error?: string; }
