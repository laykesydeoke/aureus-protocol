export interface urlencodeEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface urlencodeCreateParams1 { value: number; }
export interface urlencodeUpdateParams1 { id: number; newValue: number; }
export type urlencodeStatus1 = 'active' | 'inactive' | 'pending';
export interface urlencodeQueryResult1<T> { success: boolean; data?: T; error?: string; }
