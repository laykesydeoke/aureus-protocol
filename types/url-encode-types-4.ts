export interface urlencodeEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface urlencodeCreateParams4 { value: number; }
export interface urlencodeUpdateParams4 { id: number; newValue: number; }
export type urlencodeStatus4 = 'active' | 'inactive' | 'pending';
export interface urlencodeQueryResult4<T> { success: boolean; data?: T; error?: string; }
