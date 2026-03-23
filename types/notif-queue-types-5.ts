export interface notifqueueEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface notifqueueCreateParams5 { value: number; }
export interface notifqueueUpdateParams5 { id: number; newValue: number; }
export type notifqueueStatus5 = 'active' | 'inactive' | 'pending';
export interface notifqueueQueryResult5<T> { success: boolean; data?: T; error?: string; }
