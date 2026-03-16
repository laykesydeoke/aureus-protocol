export interface planmgrEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface planmgrCreateParams3 { value: number; }
export interface planmgrUpdateParams3 { id: number; newValue: number; }
export type planmgrStatus3 = 'active' | 'inactive' | 'pending';
export interface planmgrQueryResult3<T> { success: boolean; data?: T; error?: string; }
