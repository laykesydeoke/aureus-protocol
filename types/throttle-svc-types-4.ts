export interface throttlesvcEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface throttlesvcCreateParams4 { value: number; }
export interface throttlesvcUpdateParams4 { id: number; newValue: number; }
export type throttlesvcStatus4 = 'active' | 'inactive' | 'pending';
export interface throttlesvcQueryResult4<T> { success: boolean; data?: T; error?: string; }
