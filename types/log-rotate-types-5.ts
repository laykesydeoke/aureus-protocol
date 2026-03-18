export interface logrotateEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface logrotateCreateParams5 { value: number; }
export interface logrotateUpdateParams5 { id: number; newValue: number; }
export type logrotateStatus5 = 'active' | 'inactive' | 'pending';
export interface logrotateQueryResult5<T> { success: boolean; data?: T; error?: string; }
