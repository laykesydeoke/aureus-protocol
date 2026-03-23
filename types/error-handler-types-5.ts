export interface errorhandlerEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface errorhandlerCreateParams5 { value: number; }
export interface errorhandlerUpdateParams5 { id: number; newValue: number; }
export type errorhandlerStatus5 = 'active' | 'inactive' | 'pending';
export interface errorhandlerQueryResult5<T> { success: boolean; data?: T; error?: string; }
