export interface buildoptEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface buildoptCreateParams3 { value: number; }
export interface buildoptUpdateParams3 { id: number; newValue: number; }
export type buildoptStatus3 = 'active' | 'inactive' | 'pending';
export interface buildoptQueryResult3<T> { success: boolean; data?: T; error?: string; }
