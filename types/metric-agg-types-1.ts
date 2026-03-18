export interface metricaggEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface metricaggCreateParams1 { value: number; }
export interface metricaggUpdateParams1 { id: number; newValue: number; }
export type metricaggStatus1 = 'active' | 'inactive' | 'pending';
export interface metricaggQueryResult1<T> { success: boolean; data?: T; error?: string; }
