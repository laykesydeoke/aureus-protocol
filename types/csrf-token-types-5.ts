export interface csrftokenEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface csrftokenCreateParams5 { value: number; }
export interface csrftokenUpdateParams5 { id: number; newValue: number; }
export type csrftokenStatus5 = 'active' | 'inactive' | 'pending';
export interface csrftokenQueryResult5<T> { success: boolean; data?: T; error?: string; }
