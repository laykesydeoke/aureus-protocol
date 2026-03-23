export interface planmgrEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface planmgrCreateParams4 { value: number; }
export interface planmgrUpdateParams4 { id: number; newValue: number; }
export type planmgrStatus4 = 'active' | 'inactive' | 'pending';
export interface planmgrQueryResult4<T> { success: boolean; data?: T; error?: string; }
