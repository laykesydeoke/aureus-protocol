export interface errorhandlerEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface errorhandlerCreateParams1 { value: number; }
export interface errorhandlerUpdateParams1 { id: number; newValue: number; }
export type errorhandlerStatus1 = 'active' | 'inactive' | 'pending';
export interface errorhandlerQueryResult1<T> { success: boolean; data?: T; error?: string; }
