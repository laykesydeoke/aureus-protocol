export interface sessionmgrEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface sessionmgrCreateParams1 { value: number; }
export interface sessionmgrUpdateParams1 { id: number; newValue: number; }
export type sessionmgrStatus1 = 'active' | 'inactive' | 'pending';
export interface sessionmgrQueryResult1<T> { success: boolean; data?: T; error?: string; }
