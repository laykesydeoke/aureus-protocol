export interface dashboardapiEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface dashboardapiCreateParams3 { value: number; }
export interface dashboardapiUpdateParams3 { id: number; newValue: number; }
export type dashboardapiStatus3 = 'active' | 'inactive' | 'pending';
export interface dashboardapiQueryResult3<T> { success: boolean; data?: T; error?: string; }
