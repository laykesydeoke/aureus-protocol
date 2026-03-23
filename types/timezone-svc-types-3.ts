export interface timezonesvcEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface timezonesvcCreateParams3 { value: number; }
export interface timezonesvcUpdateParams3 { id: number; newValue: number; }
export type timezonesvcStatus3 = 'active' | 'inactive' | 'pending';
export interface timezonesvcQueryResult3<T> { success: boolean; data?: T; error?: string; }
