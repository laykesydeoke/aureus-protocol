export interface latencymonEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface latencymonCreateParams3 { value: number; }
export interface latencymonUpdateParams3 { id: number; newValue: number; }
export type latencymonStatus3 = 'active' | 'inactive' | 'pending';
export interface latencymonQueryResult3<T> { success: boolean; data?: T; error?: string; }
