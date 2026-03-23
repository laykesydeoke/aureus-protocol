export interface eagerfetchEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface eagerfetchCreateParams3 { value: number; }
export interface eagerfetchUpdateParams3 { id: number; newValue: number; }
export type eagerfetchStatus3 = 'active' | 'inactive' | 'pending';
export interface eagerfetchQueryResult3<T> { success: boolean; data?: T; error?: string; }
