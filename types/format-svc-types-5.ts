export interface formatsvcEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface formatsvcCreateParams5 { value: number; }
export interface formatsvcUpdateParams5 { id: number; newValue: number; }
export type formatsvcStatus5 = 'active' | 'inactive' | 'pending';
export interface formatsvcQueryResult5<T> { success: boolean; data?: T; error?: string; }
