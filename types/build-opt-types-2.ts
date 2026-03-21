export interface buildoptEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface buildoptCreateParams2 { value: number; }
export interface buildoptUpdateParams2 { id: number; newValue: number; }
export type buildoptStatus2 = 'active' | 'inactive' | 'pending';
export interface buildoptQueryResult2<T> { success: boolean; data?: T; error?: string; }
