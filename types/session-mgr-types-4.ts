export interface sessionmgrEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface sessionmgrCreateParams4 { value: number; }
export interface sessionmgrUpdateParams4 { id: number; newValue: number; }
export type sessionmgrStatus4 = 'active' | 'inactive' | 'pending';
export interface sessionmgrQueryResult4<T> { success: boolean; data?: T; error?: string; }
