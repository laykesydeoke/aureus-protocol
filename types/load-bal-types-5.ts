export interface loadbalEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface loadbalCreateParams5 { value: number; }
export interface loadbalUpdateParams5 { id: number; newValue: number; }
export type loadbalStatus5 = 'active' | 'inactive' | 'pending';
export interface loadbalQueryResult5<T> { success: boolean; data?: T; error?: string; }
