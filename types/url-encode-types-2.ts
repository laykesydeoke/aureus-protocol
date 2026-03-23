export interface urlencodeEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface urlencodeCreateParams2 { value: number; }
export interface urlencodeUpdateParams2 { id: number; newValue: number; }
export type urlencodeStatus2 = 'active' | 'inactive' | 'pending';
export interface urlencodeQueryResult2<T> { success: boolean; data?: T; error?: string; }
