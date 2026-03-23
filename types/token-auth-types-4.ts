export interface tokenauthEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface tokenauthCreateParams4 { value: number; }
export interface tokenauthUpdateParams4 { id: number; newValue: number; }
export type tokenauthStatus4 = 'active' | 'inactive' | 'pending';
export interface tokenauthQueryResult4<T> { success: boolean; data?: T; error?: string; }
