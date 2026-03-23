export interface batchopsEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface batchopsCreateParams4 { value: number; }
export interface batchopsUpdateParams4 { id: number; newValue: number; }
export type batchopsStatus4 = 'active' | 'inactive' | 'pending';
export interface batchopsQueryResult4<T> { success: boolean; data?: T; error?: string; }
