export interface metricaggEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface metricaggCreateParams3 { value: number; }
export interface metricaggUpdateParams3 { id: number; newValue: number; }
export type metricaggStatus3 = 'active' | 'inactive' | 'pending';
export interface metricaggQueryResult3<T> { success: boolean; data?: T; error?: string; }
