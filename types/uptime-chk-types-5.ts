export interface uptimechkEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface uptimechkCreateParams5 { value: number; }
export interface uptimechkUpdateParams5 { id: number; newValue: number; }
export type uptimechkStatus5 = 'active' | 'inactive' | 'pending';
export interface uptimechkQueryResult5<T> { success: boolean; data?: T; error?: string; }
