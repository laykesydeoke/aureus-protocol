export interface urlencodeEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface urlencodeCreateParams3 { value: number; }
export interface urlencodeUpdateParams3 { id: number; newValue: number; }
export type urlencodeStatus3 = 'active' | 'inactive' | 'pending';
export interface urlencodeQueryResult3<T> { success: boolean; data?: T; error?: string; }
