export interface throttlesvcEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface throttlesvcCreateParams5 { value: number; }
export interface throttlesvcUpdateParams5 { id: number; newValue: number; }
export type throttlesvcStatus5 = 'active' | 'inactive' | 'pending';
export interface throttlesvcQueryResult5<T> { success: boolean; data?: T; error?: string; }
