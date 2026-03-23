export interface alertruleEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface alertruleCreateParams5 { value: number; }
export interface alertruleUpdateParams5 { id: number; newValue: number; }
export type alertruleStatus5 = 'active' | 'inactive' | 'pending';
export interface alertruleQueryResult5<T> { success: boolean; data?: T; error?: string; }
