export interface tokenauthEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface tokenauthCreateParams2 { value: number; }
export interface tokenauthUpdateParams2 { id: number; newValue: number; }
export type tokenauthStatus2 = 'active' | 'inactive' | 'pending';
export interface tokenauthQueryResult2<T> { success: boolean; data?: T; error?: string; }
