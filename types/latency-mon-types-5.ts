export interface latencymonEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface latencymonCreateParams5 { value: number; }
export interface latencymonUpdateParams5 { id: number; newValue: number; }
export type latencymonStatus5 = 'active' | 'inactive' | 'pending';
export interface latencymonQueryResult5<T> { success: boolean; data?: T; error?: string; }
