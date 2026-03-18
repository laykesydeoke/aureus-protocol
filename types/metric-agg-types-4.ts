export interface metricaggEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface metricaggCreateParams4 { value: number; }
export interface metricaggUpdateParams4 { id: number; newValue: number; }
export type metricaggStatus4 = 'active' | 'inactive' | 'pending';
export interface metricaggQueryResult4<T> { success: boolean; data?: T; error?: string; }
