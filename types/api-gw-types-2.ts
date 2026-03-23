export interface apigwEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface apigwCreateParams2 { value: number; }
export interface apigwUpdateParams2 { id: number; newValue: number; }
export type apigwStatus2 = 'active' | 'inactive' | 'pending';
export interface apigwQueryResult2<T> { success: boolean; data?: T; error?: string; }
