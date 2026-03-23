export interface streamprocEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface streamprocCreateParams3 { value: number; }
export interface streamprocUpdateParams3 { id: number; newValue: number; }
export type streamprocStatus3 = 'active' | 'inactive' | 'pending';
export interface streamprocQueryResult3<T> { success: boolean; data?: T; error?: string; }
