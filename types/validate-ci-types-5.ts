export interface validateciEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface validateciCreateParams5 { value: number; }
export interface validateciUpdateParams5 { id: number; newValue: number; }
export type validateciStatus5 = 'active' | 'inactive' | 'pending';
export interface validateciQueryResult5<T> { success: boolean; data?: T; error?: string; }
