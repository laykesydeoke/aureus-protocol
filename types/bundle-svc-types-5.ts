export interface bundlesvcEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface bundlesvcCreateParams5 { value: number; }
export interface bundlesvcUpdateParams5 { id: number; newValue: number; }
export type bundlesvcStatus5 = 'active' | 'inactive' | 'pending';
export interface bundlesvcQueryResult5<T> { success: boolean; data?: T; error?: string; }
