export interface xssguardEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface xssguardCreateParams1 { value: number; }
export interface xssguardUpdateParams1 { id: number; newValue: number; }
export type xssguardStatus1 = 'active' | 'inactive' | 'pending';
export interface xssguardQueryResult1<T> { success: boolean; data?: T; error?: string; }
