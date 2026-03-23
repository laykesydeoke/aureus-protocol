export interface xssguardEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface xssguardCreateParams3 { value: number; }
export interface xssguardUpdateParams3 { id: number; newValue: number; }
export type xssguardStatus3 = 'active' | 'inactive' | 'pending';
export interface xssguardQueryResult3<T> { success: boolean; data?: T; error?: string; }
