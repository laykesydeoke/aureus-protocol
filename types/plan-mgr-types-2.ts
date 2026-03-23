export interface planmgrEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface planmgrCreateParams2 { value: number; }
export interface planmgrUpdateParams2 { id: number; newValue: number; }
export type planmgrStatus2 = 'active' | 'inactive' | 'pending';
export interface planmgrQueryResult2<T> { success: boolean; data?: T; error?: string; }
