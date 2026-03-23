export interface eagerfetchEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface eagerfetchCreateParams1 { value: number; }
export interface eagerfetchUpdateParams1 { id: number; newValue: number; }
export type eagerfetchStatus1 = 'active' | 'inactive' | 'pending';
export interface eagerfetchQueryResult1<T> { success: boolean; data?: T; error?: string; }
