export interface logrotateEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface logrotateCreateParams4 { value: number; }
export interface logrotateUpdateParams4 { id: number; newValue: number; }
export type logrotateStatus4 = 'active' | 'inactive' | 'pending';
export interface logrotateQueryResult4<T> { success: boolean; data?: T; error?: string; }
