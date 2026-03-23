export interface dashboardapiEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface dashboardapiCreateParams4 { value: number; }
export interface dashboardapiUpdateParams4 { id: number; newValue: number; }
export type dashboardapiStatus4 = 'active' | 'inactive' | 'pending';
export interface dashboardapiQueryResult4<T> { success: boolean; data?: T; error?: string; }
