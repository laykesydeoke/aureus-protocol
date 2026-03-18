export interface uptimechkEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface uptimechkCreateParams3 { value: number; }
export interface uptimechkUpdateParams3 { id: number; newValue: number; }
export type uptimechkStatus3 = 'active' | 'inactive' | 'pending';
export interface uptimechkQueryResult3<T> { success: boolean; data?: T; error?: string; }
