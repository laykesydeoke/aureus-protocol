export interface uptimechkEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface uptimechkCreateParams2 { value: number; }
export interface uptimechkUpdateParams2 { id: number; newValue: number; }
export type uptimechkStatus2 = 'active' | 'inactive' | 'pending';
export interface uptimechkQueryResult2<T> { success: boolean; data?: T; error?: string; }
