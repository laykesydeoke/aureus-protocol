export interface uptimechkEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface uptimechkCreateParams1 { value: number; }
export interface uptimechkUpdateParams1 { id: number; newValue: number; }
export type uptimechkStatus1 = 'active' | 'inactive' | 'pending';
export interface uptimechkQueryResult1<T> { success: boolean; data?: T; error?: string; }
