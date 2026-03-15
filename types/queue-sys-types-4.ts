export interface queuesysEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface queuesysCreateParams4 { value: number; }
export interface queuesysUpdateParams4 { id: number; newValue: number; }
export type queuesysStatus4 = 'active' | 'inactive' | 'pending';
export interface queuesysQueryResult4<T> { success: boolean; data?: T; error?: string; }
