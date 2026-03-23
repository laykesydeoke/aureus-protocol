export interface apigwEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface apigwCreateParams3 { value: number; }
export interface apigwUpdateParams3 { id: number; newValue: number; }
export type apigwStatus3 = 'active' | 'inactive' | 'pending';
export interface apigwQueryResult3<T> { success: boolean; data?: T; error?: string; }
