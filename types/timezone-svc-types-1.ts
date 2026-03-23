export interface timezonesvcEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface timezonesvcCreateParams1 { value: number; }
export interface timezonesvcUpdateParams1 { id: number; newValue: number; }
export type timezonesvcStatus1 = 'active' | 'inactive' | 'pending';
export interface timezonesvcQueryResult1<T> { success: boolean; data?: T; error?: string; }
