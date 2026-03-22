export interface csrftokenEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface csrftokenCreateParams1 { value: number; }
export interface csrftokenUpdateParams1 { id: number; newValue: number; }
export type csrftokenStatus1 = 'active' | 'inactive' | 'pending';
export interface csrftokenQueryResult1<T> { success: boolean; data?: T; error?: string; }
