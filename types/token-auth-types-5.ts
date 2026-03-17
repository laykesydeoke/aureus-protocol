export interface tokenauthEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface tokenauthCreateParams5 { value: number; }
export interface tokenauthUpdateParams5 { id: number; newValue: number; }
export type tokenauthStatus5 = 'active' | 'inactive' | 'pending';
export interface tokenauthQueryResult5<T> { success: boolean; data?: T; error?: string; }
