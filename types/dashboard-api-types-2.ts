export interface dashboardapiEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface dashboardapiCreateParams2 { value: number; }
export interface dashboardapiUpdateParams2 { id: number; newValue: number; }
export type dashboardapiStatus2 = 'active' | 'inactive' | 'pending';
export interface dashboardapiQueryResult2<T> { success: boolean; data?: T; error?: string; }
