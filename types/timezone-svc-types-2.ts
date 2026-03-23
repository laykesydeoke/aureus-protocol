export interface timezonesvcEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface timezonesvcCreateParams2 { value: number; }
export interface timezonesvcUpdateParams2 { id: number; newValue: number; }
export type timezonesvcStatus2 = 'active' | 'inactive' | 'pending';
export interface timezonesvcQueryResult2<T> { success: boolean; data?: T; error?: string; }
