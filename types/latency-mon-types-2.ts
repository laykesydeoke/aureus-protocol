export interface latencymonEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface latencymonCreateParams2 { value: number; }
export interface latencymonUpdateParams2 { id: number; newValue: number; }
export type latencymonStatus2 = 'active' | 'inactive' | 'pending';
export interface latencymonQueryResult2<T> { success: boolean; data?: T; error?: string; }
