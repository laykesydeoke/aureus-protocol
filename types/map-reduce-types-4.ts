export interface mapreduceEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface mapreduceCreateParams4 { value: number; }
export interface mapreduceUpdateParams4 { id: number; newValue: number; }
export type mapreduceStatus4 = 'active' | 'inactive' | 'pending';
export interface mapreduceQueryResult4<T> { success: boolean; data?: T; error?: string; }
