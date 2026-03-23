export interface notifqueueEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface notifqueueCreateParams4 { value: number; }
export interface notifqueueUpdateParams4 { id: number; newValue: number; }
export type notifqueueStatus4 = 'active' | 'inactive' | 'pending';
export interface notifqueueQueryResult4<T> { success: boolean; data?: T; error?: string; }
