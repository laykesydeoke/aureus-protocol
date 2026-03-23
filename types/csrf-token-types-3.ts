export interface csrftokenEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface csrftokenCreateParams3 { value: number; }
export interface csrftokenUpdateParams3 { id: number; newValue: number; }
export type csrftokenStatus3 = 'active' | 'inactive' | 'pending';
export interface csrftokenQueryResult3<T> { success: boolean; data?: T; error?: string; }
