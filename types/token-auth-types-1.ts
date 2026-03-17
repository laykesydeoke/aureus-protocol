export interface tokenauthEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface tokenauthCreateParams1 { value: number; }
export interface tokenauthUpdateParams1 { id: number; newValue: number; }
export type tokenauthStatus1 = 'active' | 'inactive' | 'pending';
export interface tokenauthQueryResult1<T> { success: boolean; data?: T; error?: string; }
