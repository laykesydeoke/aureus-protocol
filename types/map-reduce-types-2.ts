export interface mapreduceEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface mapreduceCreateParams2 { value: number; }
export interface mapreduceUpdateParams2 { id: number; newValue: number; }
export type mapreduceStatus2 = 'active' | 'inactive' | 'pending';
export interface mapreduceQueryResult2<T> { success: boolean; data?: T; error?: string; }
