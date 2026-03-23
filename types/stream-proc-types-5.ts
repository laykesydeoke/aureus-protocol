export interface streamprocEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface streamprocCreateParams5 { value: number; }
export interface streamprocUpdateParams5 { id: number; newValue: number; }
export type streamprocStatus5 = 'active' | 'inactive' | 'pending';
export interface streamprocQueryResult5<T> { success: boolean; data?: T; error?: string; }
