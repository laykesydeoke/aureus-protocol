export interface latencymonEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface latencymonCreateParams1 { value: number; }
export interface latencymonUpdateParams1 { id: number; newValue: number; }
export type latencymonStatus1 = 'active' | 'inactive' | 'pending';
export interface latencymonQueryResult1<T> { success: boolean; data?: T; error?: string; }
