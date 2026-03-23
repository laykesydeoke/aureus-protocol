export interface uptimechkEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface uptimechkCreateParams4 { value: number; }
export interface uptimechkUpdateParams4 { id: number; newValue: number; }
export type uptimechkStatus4 = 'active' | 'inactive' | 'pending';
export interface uptimechkQueryResult4<T> { success: boolean; data?: T; error?: string; }
