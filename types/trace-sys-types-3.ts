export interface tracesysEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface tracesysCreateParams3 { value: number; }
export interface tracesysUpdateParams3 { id: number; newValue: number; }
export type tracesysStatus3 = 'active' | 'inactive' | 'pending';
export interface tracesysQueryResult3<T> { success: boolean; data?: T; error?: string; }
