export interface dashboardapiEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface dashboardapiCreateParams1 { value: number; }
export interface dashboardapiUpdateParams1 { id: number; newValue: number; }
export type dashboardapiStatus1 = 'active' | 'inactive' | 'pending';
export interface dashboardapiQueryResult1<T> { success: boolean; data?: T; error?: string; }
