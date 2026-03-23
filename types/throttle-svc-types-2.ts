export interface throttlesvcEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface throttlesvcCreateParams2 { value: number; }
export interface throttlesvcUpdateParams2 { id: number; newValue: number; }
export type throttlesvcStatus2 = 'active' | 'inactive' | 'pending';
export interface throttlesvcQueryResult2<T> { success: boolean; data?: T; error?: string; }
