export interface notifqueueEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface notifqueueCreateParams3 { value: number; }
export interface notifqueueUpdateParams3 { id: number; newValue: number; }
export type notifqueueStatus3 = 'active' | 'inactive' | 'pending';
export interface notifqueueQueryResult3<T> { success: boolean; data?: T; error?: string; }
