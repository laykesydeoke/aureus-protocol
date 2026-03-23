export interface loadbalEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface loadbalCreateParams2 { value: number; }
export interface loadbalUpdateParams2 { id: number; newValue: number; }
export type loadbalStatus2 = 'active' | 'inactive' | 'pending';
export interface loadbalQueryResult2<T> { success: boolean; data?: T; error?: string; }
