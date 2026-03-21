export interface buildoptEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface buildoptCreateParams4 { value: number; }
export interface buildoptUpdateParams4 { id: number; newValue: number; }
export type buildoptStatus4 = 'active' | 'inactive' | 'pending';
export interface buildoptQueryResult4<T> { success: boolean; data?: T; error?: string; }
