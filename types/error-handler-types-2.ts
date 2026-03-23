export interface errorhandlerEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface errorhandlerCreateParams2 { value: number; }
export interface errorhandlerUpdateParams2 { id: number; newValue: number; }
export type errorhandlerStatus2 = 'active' | 'inactive' | 'pending';
export interface errorhandlerQueryResult2<T> { success: boolean; data?: T; error?: string; }
