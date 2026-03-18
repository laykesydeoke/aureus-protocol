export interface logrotateEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface logrotateCreateParams2 { value: number; }
export interface logrotateUpdateParams2 { id: number; newValue: number; }
export type logrotateStatus2 = 'active' | 'inactive' | 'pending';
export interface logrotateQueryResult2<T> { success: boolean; data?: T; error?: string; }
