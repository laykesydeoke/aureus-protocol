export interface urlencodeEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface urlencodeCreateParams5 { value: number; }
export interface urlencodeUpdateParams5 { id: number; newValue: number; }
export type urlencodeStatus5 = 'active' | 'inactive' | 'pending';
export interface urlencodeQueryResult5<T> { success: boolean; data?: T; error?: string; }
