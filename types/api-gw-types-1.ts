export interface apigwEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface apigwCreateParams1 { value: number; }
export interface apigwUpdateParams1 { id: number; newValue: number; }
export type apigwStatus1 = 'active' | 'inactive' | 'pending';
export interface apigwQueryResult1<T> { success: boolean; data?: T; error?: string; }
