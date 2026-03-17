export interface sessionmgrEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface sessionmgrCreateParams2 { value: number; }
export interface sessionmgrUpdateParams2 { id: number; newValue: number; }
export type sessionmgrStatus2 = 'active' | 'inactive' | 'pending';
export interface sessionmgrQueryResult2<T> { success: boolean; data?: T; error?: string; }
