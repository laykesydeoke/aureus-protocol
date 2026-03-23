export interface timezonesvcEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface timezonesvcCreateParams5 { value: number; }
export interface timezonesvcUpdateParams5 { id: number; newValue: number; }
export type timezonesvcStatus5 = 'active' | 'inactive' | 'pending';
export interface timezonesvcQueryResult5<T> { success: boolean; data?: T; error?: string; }
