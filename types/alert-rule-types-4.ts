export interface alertruleEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface alertruleCreateParams4 { value: number; }
export interface alertruleUpdateParams4 { id: number; newValue: number; }
export type alertruleStatus4 = 'active' | 'inactive' | 'pending';
export interface alertruleQueryResult4<T> { success: boolean; data?: T; error?: string; }
