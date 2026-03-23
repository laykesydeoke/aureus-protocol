export interface certmgrEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface certmgrCreateParams5 { value: number; }
export interface certmgrUpdateParams5 { id: number; newValue: number; }
export type certmgrStatus5 = 'active' | 'inactive' | 'pending';
export interface certmgrQueryResult5<T> { success: boolean; data?: T; error?: string; }
