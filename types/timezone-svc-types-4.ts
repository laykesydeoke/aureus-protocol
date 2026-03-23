export interface timezonesvcEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface timezonesvcCreateParams4 { value: number; }
export interface timezonesvcUpdateParams4 { id: number; newValue: number; }
export type timezonesvcStatus4 = 'active' | 'inactive' | 'pending';
export interface timezonesvcQueryResult4<T> { success: boolean; data?: T; error?: string; }
