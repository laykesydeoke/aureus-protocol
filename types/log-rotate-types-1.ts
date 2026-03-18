export interface logrotateEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface logrotateCreateParams1 { value: number; }
export interface logrotateUpdateParams1 { id: number; newValue: number; }
export type logrotateStatus1 = 'active' | 'inactive' | 'pending';
export interface logrotateQueryResult1<T> { success: boolean; data?: T; error?: string; }
