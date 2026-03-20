export interface mapreduceEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface mapreduceCreateParams5 { value: number; }
export interface mapreduceUpdateParams5 { id: number; newValue: number; }
export type mapreduceStatus5 = 'active' | 'inactive' | 'pending';
export interface mapreduceQueryResult5<T> { success: boolean; data?: T; error?: string; }
