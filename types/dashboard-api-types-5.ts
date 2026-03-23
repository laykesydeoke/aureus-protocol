export interface dashboardapiEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface dashboardapiCreateParams5 { value: number; }
export interface dashboardapiUpdateParams5 { id: number; newValue: number; }
export type dashboardapiStatus5 = 'active' | 'inactive' | 'pending';
export interface dashboardapiQueryResult5<T> { success: boolean; data?: T; error?: string; }
