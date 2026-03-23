export interface queuesysEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface queuesysCreateParams5 { value: number; }
export interface queuesysUpdateParams5 { id: number; newValue: number; }
export type queuesysStatus5 = 'active' | 'inactive' | 'pending';
export interface queuesysQueryResult5<T> { success: boolean; data?: T; error?: string; }
