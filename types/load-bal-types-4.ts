export interface loadbalEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface loadbalCreateParams4 { value: number; }
export interface loadbalUpdateParams4 { id: number; newValue: number; }
export type loadbalStatus4 = 'active' | 'inactive' | 'pending';
export interface loadbalQueryResult4<T> { success: boolean; data?: T; error?: string; }
