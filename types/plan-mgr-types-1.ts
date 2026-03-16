export interface planmgrEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface planmgrCreateParams1 { value: number; }
export interface planmgrUpdateParams1 { id: number; newValue: number; }
export type planmgrStatus1 = 'active' | 'inactive' | 'pending';
export interface planmgrQueryResult1<T> { success: boolean; data?: T; error?: string; }
