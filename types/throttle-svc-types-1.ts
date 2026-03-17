export interface throttlesvcEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface throttlesvcCreateParams1 { value: number; }
export interface throttlesvcUpdateParams1 { id: number; newValue: number; }
export type throttlesvcStatus1 = 'active' | 'inactive' | 'pending';
export interface throttlesvcQueryResult1<T> { success: boolean; data?: T; error?: string; }
