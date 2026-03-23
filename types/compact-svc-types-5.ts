export interface compactsvcEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface compactsvcCreateParams5 { value: number; }
export interface compactsvcUpdateParams5 { id: number; newValue: number; }
export type compactsvcStatus5 = 'active' | 'inactive' | 'pending';
export interface compactsvcQueryResult5<T> { success: boolean; data?: T; error?: string; }
