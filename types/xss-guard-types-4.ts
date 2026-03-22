export interface xssguardEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface xssguardCreateParams4 { value: number; }
export interface xssguardUpdateParams4 { id: number; newValue: number; }
export type xssguardStatus4 = 'active' | 'inactive' | 'pending';
export interface xssguardQueryResult4<T> { success: boolean; data?: T; error?: string; }
