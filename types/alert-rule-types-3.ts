export interface alertruleEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface alertruleCreateParams3 { value: number; }
export interface alertruleUpdateParams3 { id: number; newValue: number; }
export type alertruleStatus3 = 'active' | 'inactive' | 'pending';
export interface alertruleQueryResult3<T> { success: boolean; data?: T; error?: string; }
