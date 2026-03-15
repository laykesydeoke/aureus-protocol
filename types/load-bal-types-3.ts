export interface loadbalEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface loadbalCreateParams3 { value: number; }
export interface loadbalUpdateParams3 { id: number; newValue: number; }
export type loadbalStatus3 = 'active' | 'inactive' | 'pending';
export interface loadbalQueryResult3<T> { success: boolean; data?: T; error?: string; }
