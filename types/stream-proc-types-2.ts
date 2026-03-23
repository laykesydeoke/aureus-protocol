export interface streamprocEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface streamprocCreateParams2 { value: number; }
export interface streamprocUpdateParams2 { id: number; newValue: number; }
export type streamprocStatus2 = 'active' | 'inactive' | 'pending';
export interface streamprocQueryResult2<T> { success: boolean; data?: T; error?: string; }
