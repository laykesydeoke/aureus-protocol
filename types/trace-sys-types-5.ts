export interface tracesysEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface tracesysCreateParams5 { value: number; }
export interface tracesysUpdateParams5 { id: number; newValue: number; }
export type tracesysStatus5 = 'active' | 'inactive' | 'pending';
export interface tracesysQueryResult5<T> { success: boolean; data?: T; error?: string; }
