export interface throttlesvcEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface throttlesvcCreateParams3 { value: number; }
export interface throttlesvcUpdateParams3 { id: number; newValue: number; }
export type throttlesvcStatus3 = 'active' | 'inactive' | 'pending';
export interface throttlesvcQueryResult3<T> { success: boolean; data?: T; error?: string; }
