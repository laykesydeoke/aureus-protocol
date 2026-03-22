export interface csrftokenEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface csrftokenCreateParams4 { value: number; }
export interface csrftokenUpdateParams4 { id: number; newValue: number; }
export type csrftokenStatus4 = 'active' | 'inactive' | 'pending';
export interface csrftokenQueryResult4<T> { success: boolean; data?: T; error?: string; }
