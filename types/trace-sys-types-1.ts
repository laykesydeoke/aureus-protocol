export interface tracesysEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface tracesysCreateParams1 { value: number; }
export interface tracesysUpdateParams1 { id: number; newValue: number; }
export type tracesysStatus1 = 'active' | 'inactive' | 'pending';
export interface tracesysQueryResult1<T> { success: boolean; data?: T; error?: string; }
