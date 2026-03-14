export interface batchopsEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface batchopsCreateParams2 { value: number; }
export interface batchopsUpdateParams2 { id: number; newValue: number; }
export type batchopsStatus2 = 'active' | 'inactive' | 'pending';
export interface batchopsQueryResult2<T> { success: boolean; data?: T; error?: string; }
