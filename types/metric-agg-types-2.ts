export interface metricaggEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface metricaggCreateParams2 { value: number; }
export interface metricaggUpdateParams2 { id: number; newValue: number; }
export type metricaggStatus2 = 'active' | 'inactive' | 'pending';
export interface metricaggQueryResult2<T> { success: boolean; data?: T; error?: string; }
