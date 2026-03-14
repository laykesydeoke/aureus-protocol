export interface batchopsEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface batchopsCreateParams3 { value: number; }
export interface batchopsUpdateParams3 { id: number; newValue: number; }
export type batchopsStatus3 = 'active' | 'inactive' | 'pending';
export interface batchopsQueryResult3<T> { success: boolean; data?: T; error?: string; }
