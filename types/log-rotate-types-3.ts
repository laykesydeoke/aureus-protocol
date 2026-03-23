export interface logrotateEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface logrotateCreateParams3 { value: number; }
export interface logrotateUpdateParams3 { id: number; newValue: number; }
export type logrotateStatus3 = 'active' | 'inactive' | 'pending';
export interface logrotateQueryResult3<T> { success: boolean; data?: T; error?: string; }
