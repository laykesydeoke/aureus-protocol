export interface apigwEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface apigwCreateParams5 { value: number; }
export interface apigwUpdateParams5 { id: number; newValue: number; }
export type apigwStatus5 = 'active' | 'inactive' | 'pending';
export interface apigwQueryResult5<T> { success: boolean; data?: T; error?: string; }
