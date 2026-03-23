export interface loadbalEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface loadbalCreateParams1 { value: number; }
export interface loadbalUpdateParams1 { id: number; newValue: number; }
export type loadbalStatus1 = 'active' | 'inactive' | 'pending';
export interface loadbalQueryResult1<T> { success: boolean; data?: T; error?: string; }
