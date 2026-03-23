export interface certmgrEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface certmgrCreateParams3 { value: number; }
export interface certmgrUpdateParams3 { id: number; newValue: number; }
export type certmgrStatus3 = 'active' | 'inactive' | 'pending';
export interface certmgrQueryResult3<T> { success: boolean; data?: T; error?: string; }
