export interface queuesysEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface queuesysCreateParams2 { value: number; }
export interface queuesysUpdateParams2 { id: number; newValue: number; }
export type queuesysStatus2 = 'active' | 'inactive' | 'pending';
export interface queuesysQueryResult2<T> { success: boolean; data?: T; error?: string; }
