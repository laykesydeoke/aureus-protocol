export interface apigwEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface apigwCreateParams4 { value: number; }
export interface apigwUpdateParams4 { id: number; newValue: number; }
export type apigwStatus4 = 'active' | 'inactive' | 'pending';
export interface apigwQueryResult4<T> { success: boolean; data?: T; error?: string; }
