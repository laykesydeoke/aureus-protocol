export interface buildoptEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface buildoptCreateParams1 { value: number; }
export interface buildoptUpdateParams1 { id: number; newValue: number; }
export type buildoptStatus1 = 'active' | 'inactive' | 'pending';
export interface buildoptQueryResult1<T> { success: boolean; data?: T; error?: string; }
