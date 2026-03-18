export interface metricaggEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface metricaggCreateParams5 { value: number; }
export interface metricaggUpdateParams5 { id: number; newValue: number; }
export type metricaggStatus5 = 'active' | 'inactive' | 'pending';
export interface metricaggQueryResult5<T> { success: boolean; data?: T; error?: string; }
