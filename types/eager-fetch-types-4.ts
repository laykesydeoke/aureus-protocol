export interface eagerfetchEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface eagerfetchCreateParams4 { value: number; }
export interface eagerfetchUpdateParams4 { id: number; newValue: number; }
export type eagerfetchStatus4 = 'active' | 'inactive' | 'pending';
export interface eagerfetchQueryResult4<T> { success: boolean; data?: T; error?: string; }
