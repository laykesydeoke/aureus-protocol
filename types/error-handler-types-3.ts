export interface errorhandlerEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface errorhandlerCreateParams3 { value: number; }
export interface errorhandlerUpdateParams3 { id: number; newValue: number; }
export type errorhandlerStatus3 = 'active' | 'inactive' | 'pending';
export interface errorhandlerQueryResult3<T> { success: boolean; data?: T; error?: string; }
