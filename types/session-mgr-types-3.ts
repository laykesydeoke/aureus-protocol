export interface sessionmgrEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface sessionmgrCreateParams3 { value: number; }
export interface sessionmgrUpdateParams3 { id: number; newValue: number; }
export type sessionmgrStatus3 = 'active' | 'inactive' | 'pending';
export interface sessionmgrQueryResult3<T> { success: boolean; data?: T; error?: string; }
