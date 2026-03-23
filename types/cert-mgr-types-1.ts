export interface certmgrEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface certmgrCreateParams1 { value: number; }
export interface certmgrUpdateParams1 { id: number; newValue: number; }
export type certmgrStatus1 = 'active' | 'inactive' | 'pending';
export interface certmgrQueryResult1<T> { success: boolean; data?: T; error?: string; }
