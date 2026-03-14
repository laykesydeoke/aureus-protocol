export interface notifqueueEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface notifqueueCreateParams1 { value: number; }
export interface notifqueueUpdateParams1 { id: number; newValue: number; }
export type notifqueueStatus1 = 'active' | 'inactive' | 'pending';
export interface notifqueueQueryResult1<T> { success: boolean; data?: T; error?: string; }
