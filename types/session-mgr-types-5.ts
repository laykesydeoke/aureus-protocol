export interface sessionmgrEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface sessionmgrCreateParams5 { value: number; }
export interface sessionmgrUpdateParams5 { id: number; newValue: number; }
export type sessionmgrStatus5 = 'active' | 'inactive' | 'pending';
export interface sessionmgrQueryResult5<T> { success: boolean; data?: T; error?: string; }
