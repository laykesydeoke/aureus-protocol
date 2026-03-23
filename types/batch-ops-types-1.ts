export interface batchopsEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface batchopsCreateParams1 { value: number; }
export interface batchopsUpdateParams1 { id: number; newValue: number; }
export type batchopsStatus1 = 'active' | 'inactive' | 'pending';
export interface batchopsQueryResult1<T> { success: boolean; data?: T; error?: string; }
