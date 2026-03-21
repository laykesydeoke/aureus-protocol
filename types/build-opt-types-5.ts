export interface buildoptEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface buildoptCreateParams5 { value: number; }
export interface buildoptUpdateParams5 { id: number; newValue: number; }
export type buildoptStatus5 = 'active' | 'inactive' | 'pending';
export interface buildoptQueryResult5<T> { success: boolean; data?: T; error?: string; }
