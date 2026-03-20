export interface mapreduceEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface mapreduceCreateParams3 { value: number; }
export interface mapreduceUpdateParams3 { id: number; newValue: number; }
export type mapreduceStatus3 = 'active' | 'inactive' | 'pending';
export interface mapreduceQueryResult3<T> { success: boolean; data?: T; error?: string; }
