export interface streamprocEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface streamprocCreateParams4 { value: number; }
export interface streamprocUpdateParams4 { id: number; newValue: number; }
export type streamprocStatus4 = 'active' | 'inactive' | 'pending';
export interface streamprocQueryResult4<T> { success: boolean; data?: T; error?: string; }
