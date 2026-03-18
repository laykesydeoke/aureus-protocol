export interface alertruleEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface alertruleCreateParams1 { value: number; }
export interface alertruleUpdateParams1 { id: number; newValue: number; }
export type alertruleStatus1 = 'active' | 'inactive' | 'pending';
export interface alertruleQueryResult1<T> { success: boolean; data?: T; error?: string; }
