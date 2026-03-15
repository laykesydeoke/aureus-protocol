export interface queuesysEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface queuesysCreateParams1 { value: number; }
export interface queuesysUpdateParams1 { id: number; newValue: number; }
export type queuesysStatus1 = 'active' | 'inactive' | 'pending';
export interface queuesysQueryResult1<T> { success: boolean; data?: T; error?: string; }
