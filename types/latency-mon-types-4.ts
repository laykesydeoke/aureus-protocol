export interface latencymonEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface latencymonCreateParams4 { value: number; }
export interface latencymonUpdateParams4 { id: number; newValue: number; }
export type latencymonStatus4 = 'active' | 'inactive' | 'pending';
export interface latencymonQueryResult4<T> { success: boolean; data?: T; error?: string; }
