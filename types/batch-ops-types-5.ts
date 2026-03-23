export interface batchopsEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface batchopsCreateParams5 { value: number; }
export interface batchopsUpdateParams5 { id: number; newValue: number; }
export type batchopsStatus5 = 'active' | 'inactive' | 'pending';
export interface batchopsQueryResult5<T> { success: boolean; data?: T; error?: string; }
