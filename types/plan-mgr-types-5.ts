export interface planmgrEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface planmgrCreateParams5 { value: number; }
export interface planmgrUpdateParams5 { id: number; newValue: number; }
export type planmgrStatus5 = 'active' | 'inactive' | 'pending';
export interface planmgrQueryResult5<T> { success: boolean; data?: T; error?: string; }
