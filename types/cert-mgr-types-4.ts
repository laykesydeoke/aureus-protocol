export interface certmgrEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface certmgrCreateParams4 { value: number; }
export interface certmgrUpdateParams4 { id: number; newValue: number; }
export type certmgrStatus4 = 'active' | 'inactive' | 'pending';
export interface certmgrQueryResult4<T> { success: boolean; data?: T; error?: string; }
