export interface notifqueueEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface notifqueueCreateParams2 { value: number; }
export interface notifqueueUpdateParams2 { id: number; newValue: number; }
export type notifqueueStatus2 = 'active' | 'inactive' | 'pending';
export interface notifqueueQueryResult2<T> { success: boolean; data?: T; error?: string; }
