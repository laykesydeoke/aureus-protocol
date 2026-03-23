export interface streamprocEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface streamprocCreateParams1 { value: number; }
export interface streamprocUpdateParams1 { id: number; newValue: number; }
export type streamprocStatus1 = 'active' | 'inactive' | 'pending';
export interface streamprocQueryResult1<T> { success: boolean; data?: T; error?: string; }
