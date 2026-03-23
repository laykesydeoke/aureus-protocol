export interface xssguardEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface xssguardCreateParams5 { value: number; }
export interface xssguardUpdateParams5 { id: number; newValue: number; }
export type xssguardStatus5 = 'active' | 'inactive' | 'pending';
export interface xssguardQueryResult5<T> { success: boolean; data?: T; error?: string; }
