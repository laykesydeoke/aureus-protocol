export interface queuesysEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface queuesysCreateParams3 { value: number; }
export interface queuesysUpdateParams3 { id: number; newValue: number; }
export type queuesysStatus3 = 'active' | 'inactive' | 'pending';
export interface queuesysQueryResult3<T> { success: boolean; data?: T; error?: string; }
