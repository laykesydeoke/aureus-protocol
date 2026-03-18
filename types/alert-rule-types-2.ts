export interface alertruleEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface alertruleCreateParams2 { value: number; }
export interface alertruleUpdateParams2 { id: number; newValue: number; }
export type alertruleStatus2 = 'active' | 'inactive' | 'pending';
export interface alertruleQueryResult2<T> { success: boolean; data?: T; error?: string; }
