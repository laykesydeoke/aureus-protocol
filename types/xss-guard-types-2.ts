export interface xssguardEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface xssguardCreateParams2 { value: number; }
export interface xssguardUpdateParams2 { id: number; newValue: number; }
export type xssguardStatus2 = 'active' | 'inactive' | 'pending';
export interface xssguardQueryResult2<T> { success: boolean; data?: T; error?: string; }
