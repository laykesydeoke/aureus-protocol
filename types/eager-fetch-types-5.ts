export interface eagerfetchEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface eagerfetchCreateParams5 { value: number; }
export interface eagerfetchUpdateParams5 { id: number; newValue: number; }
export type eagerfetchStatus5 = 'active' | 'inactive' | 'pending';
export interface eagerfetchQueryResult5<T> { success: boolean; data?: T; error?: string; }
