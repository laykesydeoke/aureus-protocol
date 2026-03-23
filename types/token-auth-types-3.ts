export interface tokenauthEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface tokenauthCreateParams3 { value: number; }
export interface tokenauthUpdateParams3 { id: number; newValue: number; }
export type tokenauthStatus3 = 'active' | 'inactive' | 'pending';
export interface tokenauthQueryResult3<T> { success: boolean; data?: T; error?: string; }
