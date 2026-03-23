export interface certmgrEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface certmgrCreateParams2 { value: number; }
export interface certmgrUpdateParams2 { id: number; newValue: number; }
export type certmgrStatus2 = 'active' | 'inactive' | 'pending';
export interface certmgrQueryResult2<T> { success: boolean; data?: T; error?: string; }
